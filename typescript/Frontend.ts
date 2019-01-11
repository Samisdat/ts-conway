import * as $ from 'jquery';

import { CanvasRenderer } from './canvas-renderer';
import { MainControl } from './Control/ControlMain';
import { Habitat  } from './habitat';
import { Patterns } from './patterns';
import { Position } from './position';
import {Grid} from './Grid';
import {GridCreator} from 'Grid/GridCreator';
import {GridDimension} from 'Grid/GridDimension';

export class Frontend {

    private wrapper: JQuery;
    private control: MainControl;

    public originalCellWidth: number = 50;
    public cellWidth: number;

    private habitat: Habitat = new Habitat();

    private zero: Position;
    private offset: Position;

    private canvasRenderer: CanvasRenderer;

    constructor($element: JQuery) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        const patterns = new Patterns();
        this.habitat.seedPattern(patterns.get('blinker'));

        this.wrapper = $element;

        this.canvasRenderer = new CanvasRenderer(
            this.wrapper
        );

        this.cellWidth = this.originalCellWidth;

        this.control = new MainControl(
            this.wrapper.get(0),
            this.originalCellWidth
        );

        this.loop();

        this.habitat.startAging();


    }

    public map(position: Position): Position {

        let mapped = this.zero.move(position);
        let moved = mapped.move(this.control.getPan());
        moved = moved.move(this.offset);

        return moved;
    }

    public get(): Position[] {

        let mapped: Position[] = [];

        let living: Position[] = this.habitat.get();

        for (let position of living) {
            let map = this.map(position);

            mapped.push(map);

        }

        return mapped;
    }

    private update(): void {

        this.control.update();

        const gridCreator = new GridCreator(
            this.wrapper.width(),
            this.wrapper.height(),
            this.originalCellWidth,
            this.control.getPan(),
            this.control.getZoom()
        );

        const newGrid = new Grid(
            this.habitat,
            new GridDimension(gridCreator.getRows(), gridCreator.getCols()),
            gridCreator.getSourcePosition(),
            gridCreator.getOffset()
        );

        this.canvasRenderer.update(this.cellWidth * this.control.getZoom(), newGrid);

        this.canvasRenderer.render();


    }

    public loop() {

        this.update();

        window.requestAnimationFrame(() => {
            this.loop();
        });


    }

}