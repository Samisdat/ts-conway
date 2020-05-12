import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';
import {Grid} from '@Conway/Frontend/Grid';
import {CELL_WIDTH, GENERATION_DURATION} from '@Conway/Constants';
import {GridCreator} from '@Conway/Frontend/Grid/GridCreator';
import {CanvasRenderer} from '@Conway/Frontend/CanvasRenderer';
import {CellMatrix} from '@Conway/Geometry/CellMatrix';
import {Population} from '@Conway/Population';
import {MainControl} from '@Conway/Frontend/Control/ControlMain';

export type SeedFunction = (gridCreator: GridCreator, matrix: CellMatrix) => void;

export class Web {

    private element: HTMLElement;
    private control: MainControl;

    private matrix: CellMatrix;
    private habitat: Population;

    private canvasRenderer: CanvasRenderer;

    constructor(
        element: HTMLElement,
        seeder: SeedFunction,
        control: MainControl
    ) {

        this.matrix = new CellMatrix();
        this.habitat = new Population(
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

        this.habitat.startAging();

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

        const gridCreator = new GridCreator(
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

        const gridCreator = new GridCreator(
            this.element.offsetWidth,
            this.element.offsetHeight,
            CELL_WIDTH,
            this.control.getPan(),
            this.control.getZoom()
        );

        const newGrid = new Grid(
            this.habitat,
            new GridDimension(gridCreator.getRows(), gridCreator.getCols()),
            gridCreator.getSourcePosition(),
            gridCreator.getOffset()
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
