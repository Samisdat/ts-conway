import Position from './position';
import GridCell from './grid-cell';

export default class Grid {

    private orginalRows:number;
    private orginalCols:number;

    private rows:number;
    private cols:number;
    private zero:Position;
    private offset:Position;

    private cells: GridCell[];

    private map:{} = {};

    constructor(cols:number, rows:number, zero = new Position(0,0)) {
        this.orginalCols = cols;
        this.orginalRows = rows;
        this.zero = zero;

        let offset = new Position(0, 0);

        cols = Math.ceil(cols) + 2;
        rows = Math.ceil(rows) + 2;

        if(0 === Math.ceil(this.orginalCols )% 2){
            offset = offset.move(new Position(0.5, 0));            
        }

        if(0 === Math.ceil(this.orginalRows )% 2){
            offset = offset.move(new Position(0, 0.5));            
        }

        this.cols = cols;
        this.rows = rows;

        offset = offset.move(
            new Position(
                0.5 * ( this.orginalCols - this.cols ), 
                0.5 * ( this.orginalRows - this.rows )
            )
        );

        this.offset = offset;

        this.createGrid();
    }

    private createGrid():void{

        this.cells = [];

        for(let y = 0; y < this.rows; y += 1){
            
            for(let x = 0; x < this.cols; x += 1){
                if(undefined === this.map[x]){
                    this.map[x] = {};
                }
                this.map[x][y] = this.cells.length;
                this.cells.push(new GridCell(x, y));
            }
        }

    }

    public getWidth():number{
        return this.cols;
    }

    public getHeight():number{
        return this.rows;
    }

    public getCells(){
        return this.cells;
    }

    public getCell(col:number, row:number):GridCell{

        const index = this.map[col][row];

        return this.cells[index];
    }

    public getZero(){
        return this.zero;
    }

    public getOffset(){
        return this.offset;
    }

}