import { CanvasRenderer } from '../canvas-renderer';
import {Habitat} from '../Conway/Habitat';
import {Patterns} from '../Conway/patterns';
import {GridCreator} from '../Grid/GridCreator';
import {Position} from '../Conway/position';
import {Grid} from '../Grid';
import {GridDimension} from '../Grid/GridDimension';
import {CELL_WIDTH, DEBUG, GENERATION_DURATION} from '../Constants';
import {ControlInterface} from '../Control/ControlInterface';
import {CellMatrix} from '../Conway/CellMatrix';

export class Web {

    private element: HTMLElement;
    private control: ControlInterface;

    private matrix: CellMatrix;
    private habitat: Habitat;

    private canvasRenderer: CanvasRenderer;

    constructor(
        element: HTMLElement,
        control: ControlInterface
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

        this.initialSeed();

        this.loop();

        this.habitat.startAging();

        function checkWindowSize() {
            let width = window.innerWidth,
                height = window.innerHeight;

            // console.log('window.innerHeight: ', window.innerHeight, ' window.innerWidth: ', window.innerWidth);
        }

        window.onload = () => {
            checkWindowSize();
            window.addEventListener('resize', (event) => {
                checkWindowSize();

                this.canvasRenderer.setCanvas();
            });
        };

    }

    private initialSeed(): void {

        const patterns = new Patterns();
        const gunsAndEaters = patterns.get('guns_and_eaters');

        const gridCreator = new GridCreator(
            this.element.offsetWidth,
            this.element.offsetHeight,
            CELL_WIDTH,
            this.control.getPan(),
            this.control.getZoom()
        );

        const patternGutter = 2;

        let repeat = Math.floor(gridCreator.getRows() / (gunsAndEaters.getWidth() + patternGutter ));

        if (0 === repeat % 2) {
            repeat += 1;
        }

        let patternsPerSide = Math.floor(repeat / 2);

        this.matrix.seedPattern(
            patterns.get('guns_and_eaters'),
            new Position(0, 0)
        );


        let move = new Position(0, 0);

        if (0 === repeat % 2) {
            move = move.move(
                new Position(-1 * Math.floor((gunsAndEaters.getWidth() + patternGutter )  / 2 ), 0)
            );
        }

        for (let i = 0; i < patternsPerSide; i += 1) {

            move = move.move(
                new Position(
                    -1 * (gunsAndEaters.getWidth() + patternGutter), 0
                )
            );

            this.matrix.seedPattern(
                patterns.get('guns_and_eaters'),
                move
            );

        }

        move = new Position(0, 0);

        if (0 === repeat % 2) {
            move = move.move(
                new Position(-1 * Math.floor((gunsAndEaters.getWidth() + patternGutter )  / 2 ), 0)
            );
        }

        for (let i = 0; i < patternsPerSide; i += 1) {

            move = move.move(
                new Position(
                    gunsAndEaters.getWidth() + patternGutter, 0
                )
            );

            this.matrix.seedPattern(
                patterns.get('guns_and_eaters'),
                move
            );

        }

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
