import * as $ from 'jquery';

import { CanvasRenderer } from '../canvas-renderer';
import { MainControl } from '../Control/ControlMain';
import { Habitat  } from '../Conway/habitat';
import { Patterns } from '../Conway/patterns';
import { Grid} from '../Grid';
import { GridCreator} from 'Grid/GridCreator';
import { GridDimension } from 'Grid/GridDimension';
import { Config } from '../Config';

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

        const patterns = new Patterns();
        this.habitat.seedPattern(patterns.get('guns_and_eaters'));

        this.wrapper = $element;

        this.canvasRenderer = new CanvasRenderer(
            this.wrapper,
            Config.debug
        );

        this.control = new MainControl(
            this.wrapper.get(0),
            Config.cellWidth
        );

        this.loop();

        this.habitat.startAging();

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