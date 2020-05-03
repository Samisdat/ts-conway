import { CanvasRenderer } from '../canvas-renderer';
import {Habitat} from '../Conway/Habitat';
import {Patterns} from '../Conway/Patterns';
import {GridCreator} from '../Grid/GridCreator';
import {Position} from '../Conway/Position';
import {Grid} from '../Grid';
import {GridDimension} from '../Grid/GridDimension';
import {CELL_WIDTH, DEBUG, GENERATION_DURATION} from '../Constants';
import {MainControlInterface} from '../Control/MainControlInterface';
import {CellMatrix} from '../Conway/CellMatrix';


export type SeedFunction = (gridCreator: GridCreator, matrix: CellMatrix) => void;

export class Web {

    private element: HTMLElement;
    private control: MainControlInterface;

    private matrix: CellMatrix;
    private habitat: Habitat;

    private canvasRenderer: CanvasRenderer;

    constructor(
        element: HTMLElement,
        seeder: SeedFunction,
        control: MainControlInterface
    ) {

        this.matrix = new CellMatrix();
        this.habitat = new Habitat(
            this.matrix,
            GENERATION_DURATION
        );

        this.element = element;

        this.canvasRenderer = new CanvasRenderer(
            this.element,
            DEBUG
        );

        this.control = control;

        this.initialSeed(seeder);

        this.loop();

        this.habitat.startAging();

        function checkWindowSize() {
            let width = window.innerWidth,
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
