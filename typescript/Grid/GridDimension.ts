import {Integer} from '../Integer';

export class GridDimension {

    private readonly _rows: Integer;
    private readonly _cols: Integer;

    constructor(rows: number, cols: number) {

        this.ensurePositiveNumber(rows, 'rows');
        this.ensurePositiveNumber(cols, 'cols');

        this._rows = new Integer(rows);
        this._cols = new Integer(cols);

    }

    public get rows():number{
        return this._rows.value;
    }

    public get cols():number{
        return this._cols.value;
    }

    private ensurePositiveNumber(value: number, attributeName: string) {

        if (1 > value) {
            throw new Error(attributeName + ' must be at least 1');
        }


    }
}