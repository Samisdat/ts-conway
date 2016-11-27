import * as $ from 'jquery';

import Grid from './grid';
import Canvas from './canvas';

export default class CanvasRenderer {

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

        this.canvas.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        const cells = this.grid.getCells();

        for (let cell of cells) {

            const color = cell.getColor();

            if(undefined === color){
                continue;
            }
            
            this.canvas.ctx.fillStyle = color;

            this.canvas.ctx.fillRect(
                cell.getCol() * this.cellWidth + this.grid.getOffset().x * this.cellWidth,
                cell.getRow() * this.cellWidth + this.grid.getOffset().y * this.cellWidth,
                this.cellWidth,
                this.cellWidth
            );
        }
    }

}