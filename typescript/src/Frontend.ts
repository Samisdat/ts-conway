import * as $ from 'jquery';

import { CanvasRenderer } from '../canvas-renderer';
import { MainControl } from 'Control/ControlMain';
import { Habitat  } from 'Conway/habitat';
import { Patterns } from 'Conway/patterns';
import { Grid} from '../Grid';
import { GridCreator} from 'Grid/GridCreator';
import { GridDimension } from 'Grid/GridDimension';
import { Config } from '../Config';
import {Position} from '../Conway/position';

export class Frontend {

    private wrapper: JQuery;
    private control: MainControl;

    private habitat: Habitat;

    private canvasRenderer: CanvasRenderer;

    constructor() {

        const $element: JQuery = $(Config.htmlId);

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        this.habitat = new Habitat(Config.generationDuration);

        this.wrapper = $element;

        this.canvasRenderer = new CanvasRenderer(
            this.wrapper,
            Config.debug
        );

        this.control = new MainControl(
            this.wrapper.get(0),
            Config.cellWidth
        );

        this.initialSeed();

        this.loop();



        this.habitat.startAging();

        function checkWindowSize() {
            let width = window.innerWidth,
                height = window.innerHeight;

            console.log('window.innerHeight: ', window.innerHeight, ' window.innerWidth: ', window.innerWidth);
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
            this.wrapper.width(),
            this.wrapper.height(),
            Config.cellWidth,
            this.control.getPan(),
            this.control.getZoom()
        );

        const patternGutter = 2;

        let repeat = Math.floor(gridCreator.getRows() / (gunsAndEaters.getWidth() + patternGutter ));

        if (0 === repeat % 2) {
            repeat += 1;
        }

        let patternsPerSide = Math.floor(repeat / 2);

        this.habitat.seedPattern(
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

            this.habitat.seedPattern(
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

            this.habitat.seedPattern(
                patterns.get('guns_and_eaters'),
                move
            );

        }

    }

    private update(): void {

        this.control.update();

        const gridCreator = new GridCreator(
            this.wrapper.width(),
            this.wrapper.height(),
            Config.cellWidth,
            this.control.getPan(),
            this.control.getZoom()
        );

        const newGrid = new Grid(
            this.habitat,
            new GridDimension(gridCreator.getRows(), gridCreator.getCols()),
            gridCreator.getSourcePosition(),
            gridCreator.getOffset()
        );

        this.canvasRenderer.update(Config.cellWidth * this.control.getZoom(), newGrid);

        this.canvasRenderer.render();

    }

    public loop() {

        this.update();

        window.requestAnimationFrame(() => {
            this.loop();
        });

    }

}