
export class GridDimension {

    public readonly rows: number;
    public readonly cols: number;

    constructor(rows: number, cols: number) {

        this.rows = rows;
        this.cols = cols;

    }

    private ensurePositiveNumber(value: number, message:string){

    }
}