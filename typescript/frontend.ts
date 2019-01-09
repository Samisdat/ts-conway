import * as $ from 'jquery';

import { CanvasRenderer } from './canvas-renderer';
import { MainControl } from './Control/ControlMain';
import { Habitat  } from './habitat';
import { Patterns } from './patterns';
import { Position } from './position';
import {NewGrid} from './new-grid';
import {GridCreator} from 'Grid/GridCreator';
import {GridDimension} from 'Grid/GridDimension';

export class Frontend {

    private wrapper: JQuery;
    private control: MainControl;

    public originalCellWidth: number = 50;
    public cellWidth: number;

    private habitat: Habitat = new Habitat();

    private cols: number;
    private rows: number;

    private zero: Position;
    private offset: Position;

    private newGrid: NewGrid;

    private canvasRenderer: CanvasRenderer;

    constructor($element: JQuery) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        const patterns = new Patterns();
        this.habitat.seedPattern(patterns.get('blinker'));
        this.habitat.startAging();

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

    }

    private center() {

        this.cols = this.wrapper.width() / this.cellWidth;
        this.rows = this.wrapper.height() / this.cellWidth;

        this.zero = new Position(
            Math.floor(this.cols / 2),
            Math.floor(this.rows / 2)
        );

        let position = new Position(
            (this.cols % 1) / 2,
            (this.rows % 1) / 2
        );

        if (0 === Math.floor(this.rows) % 2) {
            const correct = new Position(0, -0.5);
            position = position.move(correct);
        }

        if (0 === Math.floor(this.cols) % 2) {
            const correct = new Position(-0.5, 0);
            position = position.move(correct);
        }

        this.offset = position;

        const cols = Math.ceil(this.wrapper.width() / this.cellWidth / this.control.getZoom());
        const rows = Math.ceil(this.wrapper.height() / this.cellWidth / this.control.getZoom());

        console.log(rows, cols);
        console.log(this.cellWidth * this.control.getZoom());

        const gridCreator = new GridCreator(
            this.wrapper.width(),
            this.wrapper.height(),
            this.cellWidth,
            this.control.getPan(),
            this.control.getZoom()
        );

        this.newGrid = new NewGrid(
            new GridDimension(gridCreator.getRows(), gridCreator.getCols()),
            gridCreator.getSourcePosition(),
            gridCreator.getOffset()
        );


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

    }

    public loop() {

        this.control.update();

        this.center();

        this.update();


        this.canvasRenderer.update(this.cellWidth * this.control.getZoom(), this.newGrid);
        this.canvasRenderer.render();


        window.requestAnimationFrame(() => {
            this.loop();
        });


    }

}