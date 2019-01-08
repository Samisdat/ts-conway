
export class GridDimension {

    public readonly rows: number;
    public readonly cols: number;

    constructor(rows: number, cols: number) {

        this.ensureInteger(rows, 'rows');
        this.ensureInteger(cols, 'cols');

        this.ensurePositiveNumber(rows, 'rows');
        this.ensurePositiveNumber(cols, 'cols');

        this.rows = rows;
        this.cols = cols;

    }

    private ensureInteger(value: number, attributeName: string) {

        if (0 !== value % 1) {
            throw new Error(attributeName + ' must be an integer');
        }

    }

    private ensurePositiveNumber(value: number, attributeName: string) {

        if (1 > value) {
            throw new Error(attributeName + ' must be at least 1');
        }


    }
}