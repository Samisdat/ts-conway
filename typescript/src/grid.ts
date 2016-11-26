import Position from './position';

export default class Grid {

    private rows:number;
    private cols:number;
    private zero:Position;
    private offset:Position;

    private cells: string[][];

    constructor(rows:number, cols:number, zero = new Position(0,0)) {

        let offset = new Position(0, 0);

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
            
            let row:string[] = [];

            for(let x = 0; x < this.cols; x += 1){
                row.push('');
            }
            this.cells.push(row);
        }

    }

    public getCells(){
        return this.cells;
    }

    public getZero(){
        return this.zero;
    }

    public getOffset(){
        return this.offset;
    }

}