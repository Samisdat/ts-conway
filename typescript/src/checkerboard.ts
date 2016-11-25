import Position from './position';
import Canvas from './canvas';

import Control from './control';

import { Renderable } from './renderable';

export default class Checkerboard{

    private canvas: Canvas;
    private control: Control;

    private darkColor: string;
    private lightColor: string;

    public originalCellWidth: number = 20;
    public cellWidth: number;

    private pan: Position;
    private offset: Position = new Position(0, 0);
    private zero: Position = new Position(0, 0);

    private startColors: string[][];

    constructor(
        canvas: Canvas,
        control: Control,
        originalCellWidth: number,
        darkColor: string,
        lightColor: string
    ) {

        this.canvas = canvas;
        this.control = control;
        this.originalCellWidth = originalCellWidth;
        this.cellWidth = this.originalCellWidth * this.control.getZoom();

        this.darkColor = darkColor;
        this.lightColor = lightColor;

        this.startColors = [
            [this.darkColor, this.lightColor],
            [this.lightColor, this.darkColor]
        ];
    }

    public update(zero: Position, offset: Position): void {

        this.cellWidth = this.originalCellWidth * this.control.getZoom();
        this.pan = this.control.getPan();
        this.offset = offset;
        this.zero = zero;
    }

    private getStartColor(): { background: string; foreground: string; } {
        let colors = {
            background: '',
            foreground: ''
        };

        const position = this.pan;

        const y = (0 > position.y) ? Math.ceil(position.y) : Math.floor(position.y);
        const x = (0 > position.x) ? Math.ceil(position.x) : Math.floor(position.x);

        const rowIndex = Math.abs(y % 2);
        const colIndex = Math.abs(x % 2);

        colors.background = this.startColors[rowIndex][colIndex];
        colors.foreground = (this.darkColor === colors.background) ? this.lightColor : this.darkColor;

        colors.background = this.darkColor;
        colors.foreground = this.lightColor;

        return colors;
    }

    public render(): void{

        const colors = this.getStartColor();

        this.canvas.ctx.fillStyle = colors.background;
        this.canvas.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const rows = Math.floor(this.canvas.height / this.cellWidth);
        const cols = Math.floor(this.canvas.width / this.cellWidth);

        const position = this.pan.move(this.offset);

        const x = position.x % 1;
        const y = position.y % 1;

        this.canvas.ctx.fillStyle = colors.foreground;

        let start = this.zero.move(this.offset).move(this.pan);

        while(-2 < start.x){

            let byX = -2; 
            let byY = 0; 
            
            const move = new Position(byX, byY);

            start = start.move(move);

        }   
        
        while(-2 < start.y){

            let byX = 0; 
            let byY = -2; 
            
            const move = new Position(byX, byY);

            start = start.move(move);

        }
        
        let pointer = new Position(start.x, start.y);

        for(var row = 0; row < rows + 6; row += 1){

            for(var col = 0; col < cols + 6 ; col += 2){

                this.canvas.ctx.fillRect(
                    pointer.x * this.cellWidth,
                    pointer.y * this.cellWidth,
                    this.cellWidth,
                    this.cellWidth
                );
                pointer = pointer.move(new Position(2, 0));            
            }
            pointer = new Position(start.x, start.y);

            let offsetX = 0;
            if(0 !== row % 2){
                offsetX = 1;
            }

            pointer = pointer.move(new Position(offsetX, row));            
        }

        /*
        if(cols < start.x){
            while(this.zero.x < start.x){
                start = start.move(new Position(-2, 0));
            }
        }

        if(rows < start.y){
            start = start.move(new Position(0, -2));
        }

        this.canvas.ctx.fillRect(
            start.x * this.cellWidth,
            start.y * this.cellWidth,
            this.cellWidth,
            this.cellWidth
        );

        // left
        while(start.x > 0){
            start = start.move(new Position(-2, 0));

            this.canvas.ctx.fillRect(
                start.x * this.cellWidth,
                start.y * this.cellWidth,
                this.cellWidth,
                this.cellWidth
            );
                        
        }

        // right
        while(start.x < cols){
            start = start.move(new Position(2, 0));
            
            this.canvas.ctx.fillRect(
                start.x * this.cellWidth,
                start.y * this.cellWidth,
                this.cellWidth,
                this.cellWidth
            );
                        
        }


        /*

        let positions: Position[] = [];

        for (let col = -1; col < cols + 2; col += 2) {

            for (let row = -1; row < rows + 2; row += 1) {

                const offset = -1 * Math.abs(row % 2);

                let tilePos = new Position(col + offset, row);
                positions.push(tilePos);
            }
        }

        let move = new Position(x, y);

        for (let position of positions) {
            position = position.move(move);

            this.canvas.ctx.fillRect(
                position.x * this.cellWidth,
                position.y * this.cellWidth,
                this.cellWidth,
                this.cellWidth
            );

        }
        */

    }

}