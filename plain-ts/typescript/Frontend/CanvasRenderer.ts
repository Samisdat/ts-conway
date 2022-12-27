import {Position} from '@Conway/Geometry/Position';
import {Canvas} from '@Conway/Frontend/Canvas';
import {Habitat} from '@Conway/Habitat';

export class CanvasRenderer {

    private element: HTMLElement;

    private canvas: Canvas;

    private cellWidth: number;

    private newGrid: Habitat;

    private bgColors = {
        dark: '#dce2c8',
        light: '#FFAAAA'
    };

    constructor(element: HTMLElement) {

        this.element = element;

        if (0 === this.element.getElementsByTagName('canvas').length) {
            this.element.append(
                document.createElement('canvas')
            );
        }

        this.setCanvas();

    }

    public setCanvas(): void {

        const canvasWidth = this.element.offsetWidth;
        const canvasHeight = this.element.offsetHeight;

        const canvas = this.element.getElementsByTagName('canvas')[0] as HTMLCanvasElement;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.canvas.width = canvasWidth;
        ctx.canvas.height = canvasHeight;

        this.canvas = new Canvas(ctx);

        // canvas is getting blury when these stunts are left
        /*
        $(canvas).css({
            width: canvasWidth + 'px',
            height: canvasHeight + 'px'
        });
         */

    }


    public update(cellWidth: number,  newGrid: Habitat): void {

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

        for (const cell of cells) {

            const color = cell.getColor();

            this.canvas.ctx.fillStyle = color;

            const x =  cell.x * cellDimension + center.x - cellDimension / 2;

            const y = cell.y * cellDimension + center.y - cellDimension / 2;

            this.canvas.ctx.fillRect(
                x,
                y,
                cellDimension,
                cellDimension
            );

        }

    }

}
