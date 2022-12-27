import {Dimension} from '@Conway/Habitat/Dimension';
import {Habitat} from '@Conway/Habitat';
import {CELL_WIDTH, GENERATION_DURATION} from '@Conway/Constants';
import {Creator} from '@Conway/Habitat/Creator';
import {CanvasRenderer} from '@Conway/Frontend/CanvasRenderer';
import {Population} from '@Conway/Population';
import {MainControl} from '@Conway/Frontend/Control/ControlMain';
import {Matrix} from '@Conway/Geometry/Matrix';

export type SeedFunction = (gridCreator: Creator, matrix: Matrix) => void;

export class Web {

    private element: HTMLElement;
    private control: MainControl;

    private matrix: Matrix;
    private population: Population;

    private canvasRenderer: CanvasRenderer;

    constructor(
        element: HTMLElement,
        seeder: SeedFunction,
        control: MainControl
    ) {

        this.matrix = new Matrix();
        this.population = new Population(
            this.matrix,
            GENERATION_DURATION
        );

        this.element = element;

        this.canvasRenderer = new CanvasRenderer(
            this.element
        );

        this.control = control;

        this.initialSeed(seeder);

        this.loop();

        this.population.startAging();

        function checkWindowSize() {
            const width = window.innerWidth,
                height = window.innerHeight;

            // console.log('window.innerHeight: ', window.innerHeight, ' window.innerWidth: ', window.innerWidth);
        }

        window.addEventListener('load', (event) => {

            checkWindowSize();
            window.addEventListener('resize', (event) => {
                checkWindowSize();

                this.canvasRenderer.setCanvas();
            });
        });

    }

    private initialSeed(seeder: SeedFunction): void {

        const gridCreator = new Creator(
            this.element.offsetWidth,
            this.element.offsetHeight,
            CELL_WIDTH,
            this.control.getPan(),
            this.control.getZoom()
        );

        seeder(gridCreator, this.matrix);

    }

    private update(): void {

        this.control.update();

        const creator = new Creator(
            this.element.offsetWidth,
            this.element.offsetHeight,
            CELL_WIDTH,
            this.control.getPan(),
            this.control.getZoom()
        );

        const newGrid = new Habitat(
            this.population,
            creator.getDimension(),
            creator.getSourcePosition(),
            creator.getOffset()
        );

        this.canvasRenderer.update(CELL_WIDTH * this.control.getZoom(), newGrid);

        this.canvasRenderer.render();

    }

    public loop() {

        this.update();

        window.requestAnimationFrame(() => {
            this.loop();
        });

    }

}
