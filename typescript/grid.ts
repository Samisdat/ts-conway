import Position from './position';
import GridCell from './grid-cell';

export default class Grid {

    private width: number;
    private height: number;
    private cellDimension: number;

    private orginalRows: number;
    private orginalCols: number;

    private rows: number;
    private cols: number;

    private zero: Position;

    private offset: Position = new Position(0, 0);

    private cells: GridCell[];

    private map: {} = {};

    constructor(width: number, height: number, cellDimension: number, zero = new Position(0, 0)) {

        this.width = width;
        this.height = height;
        this.cellDimension = cellDimension;

        const rawCols = width / cellDimension;
        const rawRows = height / cellDimension;

        this.cols = rawCols;
        this.rows = rawRows;

        if (0 !== this.cols % 1) {
            this.cols = Math.ceil(this.cols);
        }

        if (0 !== this.rows % 1) {
            this.rows = Math.ceil(this.rows);
        }

        if (0 === this.cols % 2) {
            this.cols += 1;
        }

        if (0 === this.rows % 2) {
            this.rows += 1;
        }

        this.offset = new Position(
            (rawCols - this.cols) / 2,
            (rawRows - this.rows) / 2
        );


        this.zero = zero;

        this.map = {};

        this.createGrid();
    }


    private createRow(rowStart: Position) {

        let colPosition = new Position(
            rowStart.x,
            rowStart.y
        );

        while (colPosition.x < this.orginalCols) {

            let x = colPosition.x + -1 * this.offset.x;
            let y = colPosition.y + -1 * this.offset.y;

            if (undefined === this.map[x]) {
                this.map[x] = {};
            }
            this.map[x][y] = this.cells.length;

            this.cells.push(
                new GridCell(
                    colPosition
                )
            );

            colPosition = colPosition.move(
                new Position(1, 0)
            );

        }

    }

    private createGrid(): void {

        this.cells = [];

        // first quadrant

        const end = new Position(
            Math.ceil((this.cols - 1) / 2),
            Math.ceil((this.rows - 1)  / 2)
        );

        let start = new Position(
            -1 * end.x,
            -1 * end.y
        );

        while (start.y < this.rows / 2) {

            while (start.x < this.cols / 2) {

                if (undefined === this.map[start.x]) {
                    this.map[start.x] = {};
                }

                this.map[start.x][start.y] = this.cells.length;

                this.cells.push(new GridCell(start));

                start = start.move(new Position(1, 0));

            }

            start = new Position(-1 * end.x, start.y + 1);

        }

        }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    /**
     * @TODO For even grids this is wrong
     */
    public getCols(): number {
        return this.cols;
    }

    /**
     * @TODO For even grids this is wrong
     */
    public getRows(): number {
        return this.rows;
    }

    public getCells() {
        return this.cells;
    }

    public getCell(col: number, row: number): GridCell {

        const index = this.map[col][row];

        return this.cells[index];
    }

    public getZero() {
        return this.zero;
    }

    public getOffset() {
        return this.offset;
    }

    public getCellDimension(): number {
        return this.cellDimension;
    }

}