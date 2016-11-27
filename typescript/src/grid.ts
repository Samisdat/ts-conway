import Position from './position';
import GridCell from './grid-cell';

export default class Grid {

    private rows:number;
    private cols:number;
    private zero:Position;
    private offset:Position;

    private cells: GridCell[];

    private map:{} = {};

    constructor(rows:number, cols:number, zero = new Position(0,0)) {

        let offset = new Position(0, 0);

        const remainderRows = rows % 1;
        const remainderCols = cols % 1;

        offset = offset.move(new Position(
             -0.5 * remainderCols,
             -0.5 * remainderRows
        ));            
        
        rows = Math.ceil(rows);
        cols = Math.ceil(cols);


        if(0 === rows % 2){
            rows += 2;
            offset = offset.move(new Position(0, -0.5));            
        }

        if(0 === cols % 2){
            cols += 2;
            offset = offset.move(new Position(-0.5, 0));            
        }

        this.rows = rows;
        this.cols = cols;

        this.zero = zero;
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