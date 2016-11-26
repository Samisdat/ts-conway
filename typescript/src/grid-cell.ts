import { GridCellType } from './grid-cell-types/grid-cell-type';

export default class GridCell {

    private row: number;
    private col: number;

    private type:GridCellType;

    constructor(col:number, row:number) {

        this.col = col;
        this.row = row;

    }

    public getRow():number{
        return this.row;
    }

    public getCol():number{
        return this.col;
    }

    public setType(type:GridCellType):void{
        this.type = type;
    }

    public getType():GridCellType{
        return this.type;
    }

    public getColor():string{
        return this.type.toHex();
    }

}