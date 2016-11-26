export default class GridCell {

    private row: number;
    private col: number;

    private color:string;

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

    public setColor(color:string):void{
        this.color = color;
    }

    public getColor():string{
        return this.color;
    }


}