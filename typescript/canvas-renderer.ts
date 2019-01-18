// declare var $: JQueryStatic;

import * as $ from 'jquery';

import { Canvas } from './canvas';
import {Grid} from './Grid';
import {Position} from '@Conway/position';

export class CanvasRenderer {

    private $element: JQuery;

    private readonly debug: boolean;

    private canvas: Canvas;

    private cellWidth: number;

    private newGrid: Grid;

    private bgColors = {
        dark: '#dce2c8',
        light: '#FFAAAA'
    };

    constructor($element: JQuery, debug = false) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        this.$element = $element;

        this.debug = debug;

        if (0 === this.$element.find('canvas').length) {
            this.$element.append($('<canvas>'));
        }

        this.setCanvas($element);

    }

    private setCanvas($element: JQuery): void {

        const canvasWidth = this.$element.width();
        const canvasHeight = this.$element.height();

        const canvas = this.$element.find('canvas').get(0) as HTMLCanvasElement;

        const ctx = canvas.getContext('2d');
        ctx.canvas.width = canvasWidth;
        ctx.canvas.height = canvasHeight;

        this.canvas = new Canvas(ctx);

        // canvas is getting blury when these stunts are left
        $(canvas).css({
            width: canvasWidth + 'px',
            height: canvasHeight + 'px'
        });

    }


    public update(cellWidth: number,  newGrid: Grid): void {

        this.cellWidth = cellWidth;

        this.newGrid = newGrid;

    }

    public render(): void {

        this.canvas.ctx.fillStyle = this.bgColors.dark;
        const cellDimension: number = this.cellWidth;

        this.canvas.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        const center = new Position(
            this.canvas.width / 2,
            this.canvas.height / 2
        );

        // const cells = [this.newGrid.getCells()[4]];
        const cells = this.newGrid.getCells();

        for (let cell of cells) {

            const color = cell.getColor();

            this.canvas.ctx.fillStyle = color;

            let x =  cell.x * cellDimension + center.x - cellDimension / 2;

            let y = cell.y * cellDimension + center.y - cellDimension / 2;

            this.canvas.ctx.fillRect(
                x,
                y,
                cellDimension,
                cellDimension
            );

            if (true === this.debug) {

                this.canvas.ctx.fillStyle = '#000000';

                const absolute = cell.absolutePosition;
                this.canvas.ctx.font = '10px sans-serif';
                this.canvas.ctx.fillText('a ' + absolute.x + '/' + absolute.y, x, (y + 15), cellDimension);

                const relative = cell.relativePosition;

                this.canvas.ctx.fillText('r ' + relative.x + '/' + relative.y, x, (y + 30), cellDimension);

            }

        }

    }

}