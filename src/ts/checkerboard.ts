import Position from './position';
import Canvas from './canvas';

export default class Checkerboard {

    private canvas: Canvas;
    private darkColor: string;
    private lightColor: string;

    private cellWidth: number;
    private pan: Position;

    constructor(canvas: Canvas, darkColor:string, lightColor:string) {
        this.canvas = canvas;

        this.darkColor = darkColor;
        this.lightColor = lightColor;
    }

    public update(cellWidth:number, pan: Position){
        this.cellWidth = cellWidth;
        this.pan = pan;
    }

    public render():void{

        this.canvas.ctx.fillStyle = this.darkColor;   
        this.canvas.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const rows = Math.floor(this.canvas.height / this.cellWidth) + 2;
        const cols = Math.floor(this.canvas.width / this.cellWidth) + 2;

        console.log(cols, rows)

        let xStart = - 2 - this.pan.x;
        let xStop = xStart + cols + 4;

        let yStart = - 2 - this.pan.y;
        let yStop = yStart + rows + 4;


        xStart = this.pan.x - rows;
        xStop = cols + this.pan.x;

        yStart = this.pan.y;
        yStop = rows + this.pan.y;

        this.canvas.ctx.fillStyle = this.lightColor;   

        let positions:Position[] = [];

        for(let y = yStart; y < yStop + 1; y += 1){

            let tilePos = new Position(y, y);
            tilePos = tilePos.move(this.pan);

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