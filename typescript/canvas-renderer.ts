import * as $ from 'jquery';

import { Grid } from './grid';
import { Canvas } from './canvas';

export class CanvasRenderer {

    private $element: JQuery;

    private canvas: Canvas;

    private cellWidth: number;
    private grid: Grid;

    private bgColors = {
        dark: '#D46A6A',
        light: '#FFAAAA'
    };

    constructor($element: JQuery) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        this.$element = $element;

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


    public update(cellWidth: number, grid: Grid): void {

        this.cellWidth = cellWidth;
        this.grid = grid;

    }

    public render(): void {

        this.canvas.ctx.fillStyle = this.bgColors.dark;
        const cellDimension: number = this.grid.getCellDimension();

        this.canvas.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        const cells = this.grid.getCells();

        for (let cell of cells) {

            const color = cell.getColor();

            if (undefined === color) {
                continue;
            }

            this.canvas.ctx.fillStyle = color;

            let x = this.grid.getWidth() / 2 + cell.x * cellDimension - cellDimension / 2;

            let y = this.grid.getHeight() / 2 + cell.y * cellDimension - cellDimension / 2;

            this.canvas.ctx.fillRect(
                x,
                y,
                cellDimension,
                cellDimension
            );

            this.canvas.ctx.fillStyle = '#000000';

            const absolute = cell.absolutePosition;
            this.canvas.ctx.font = '10px sans-serif';
            this.canvas.ctx.fillText(absolute.x + '/' + absolute.y, x, (y + 15), cellDimension);

            const relative = cell.relativePosition;

            this.canvas.ctx.fillText(relative.x + '/' + relative.y, x, (y + 30), cellDimension);

        }
    }

}