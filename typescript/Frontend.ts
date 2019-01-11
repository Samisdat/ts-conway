import * as $ from 'jquery';

import { CanvasRenderer } from './canvas-renderer';
import { MainControl } from './Control/ControlMain';
import { Habitat  } from './habitat';
import { Patterns } from './patterns';
import { Grid} from './Grid';
import { GridCreator} from 'Grid/GridCreator';
import { GridDimension } from 'Grid/GridDimension';
import { Config } from './Config';

export class Frontend {

    private config: Config;

    private wrapper: JQuery;
    private control: MainControl;

    private habitat: Habitat = new Habitat();

    private canvasRenderer: CanvasRenderer;

    constructor(config: Config) {

        this.config = config;

        const $element: JQuery = $(this.config.htmlId)

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        const patterns = new Patterns();
        this.habitat.seedPattern(patterns.get('blinker'));

        this.wrapper = $element;

        this.canvasRenderer = new CanvasRenderer(
            this.wrapper,
            this.config.debug
        );

        this.control = new MainControl(
            this.wrapper.get(0),
            this.config.cellWidth
        );

        this.loop();

        this.habitat.startAging();

    }

    private update(): void {

        this.control.update();

        const gridCreator = new GridCreator(
            this.wrapper.width(),
            this.wrapper.height(),
            this.config.cellWidth,
            this.control.getPan(),
            this.control.getZoom()
        );

        const newGrid = new Grid(
            this.habitat,
            new GridDimension(gridCreator.getRows(), gridCreator.getCols()),
            gridCreator.getSourcePosition(),
            gridCreator.getOffset()
        );

        this.canvasRenderer.update(this.config.cellWidth * this.control.getZoom(), newGrid);

        this.canvasRenderer.render();


    }

    public loop() {

        this.update();

        window.requestAnimationFrame(() => {
            this.loop();
        });


    }

}