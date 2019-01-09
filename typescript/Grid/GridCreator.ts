import { Position } from '../position';

export class GridCreator {


    public readonly canvasWidth:number;
    public readonly canvasHeigth:number;
    public readonly cellWidthAndHeight:number;
    public readonly pan:Position;

    private rows:number;
    private cols:number;

    constructor(
        canvasWidth:number,
        canvasHeigth:number,
        cellWidthAndHeight:number,
        pan:Position
    ) {
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeigth;
        this.cellWidthAndHeight = cellWidthAndHeight;
        this.pan = pan;


        this.rows = this.canvasWidth / cellWidthAndHeight;
        this.cols = this.canvasHeigth / cellWidthAndHeight;

    }

    public getRows():number{
        return this.rows;
    }

    public getCols():number{
        return this.cols;
    }

    public getPan():Position{
        return this.pan;
    }

}