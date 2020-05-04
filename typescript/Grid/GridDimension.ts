export class GridDimension {

    private readonly _rows: number;
    private readonly _cols: number;

    constructor(rows: number, cols: number) {

        this.ensurePositiveNumber(rows, 'rows');
        this.ensurePositiveNumber(cols, 'cols');

        this._rows = rows;
        this._cols = cols;

    }

    public get rows(): number {
        return this._rows;
    }

    public get cols(): number {
        return this._cols;
    }

    private ensurePositiveNumber(value: number, attributeName: string) {

        if (1 > value) {
            throw new Error(attributeName + ' must be at least 1');
        }


    }
}
