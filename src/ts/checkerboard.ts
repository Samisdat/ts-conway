import Position from './position';
import Canvas from './canvas';

export default class Checkerboard {

    private canvas: Canvas;
    private darkColor: string;
    private lightColor: string;

    private cellWidth: number;
    private pan: Position;

    private startColors:string[][];

    constructor(canvas: Canvas, darkColor:string, lightColor:string) {
        this.canvas = canvas;

        this.darkColor = darkColor;
        this.lightColor = lightColor;

        this.startColors = [
            [this.darkColor, this.lightColor],
            [this.lightColor, this.darkColor]
        ];
    }

    public update(cellWidth:number, pan: Position){
        this.cellWidth = cellWidth;
        this.pan = pan;
    }

    private getStartColor():{ background: string; foreground: string; }{
        let colors = {
            background: '',
            foreground: ''
        }

        const y = (0 > this.pan.y) ? Math.ceil(this.pan.y) : Math.floor(this.pan.y); 
        const x = (0 > this.pan.x) ? Math.ceil(this.pan.x) : Math.floor(this.pan.x); 

        const rowIndex = Math.abs(y % 2);
        const colIndex = Math.abs(x % 2);

        colors.background = this.startColors[rowIndex][colIndex];
        colors.foreground = (this.darkColor === colors.background) ? this.lightColor : this.darkColor;

        return colors;
    }

    public render():void{

        const colors = this.getStartColor();
    
        this.canvas.ctx.fillStyle = colors.background;   
        this.canvas.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const rows = Math.floor(this.canvas.height / this.cellWidth);
        const cols = Math.floor(this.canvas.width / this.cellWidth);

        var x = this.pan.x % 1;
        
        let xStart = x - rows;
        let xStop = xStart + cols + rows;

        let yStart = this.pan.y;
        let yStop = yStart + rows;

        this.canvas.ctx.fillStyle = colors.foreground;   

        let positions:Position[] = [];

        for(let y = yStart; y < yStop + 1; y += 1){

            let tilePos = new Position(y, y);

            positions.push(tilePos);
            
        }


        for(let x = xStart; x < xStop + 1; x += 2){

            var move = new Position(x, 0);

            for(let position of positions){
                position = position.move(move);
                
                this.canvas.ctx.fillRect(
                    position.x * this.cellWidth,  
                    position.y * this.cellWidth, 
                    this.cellWidth, 
                    this.cellWidth
                );

            }



        }

    }

    
    
}