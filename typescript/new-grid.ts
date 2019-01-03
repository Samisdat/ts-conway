import { Position } from './position';
import { GridCell } from './Grid/GridCell';

import { Habitat } from './habitat';

import { CellTypesCenter } from 'CellType/CellTypesCenter';

const centerCellType: CellTypesCenter = new CellTypesCenter();

export class NewGrid {

    private rows: number;
    private cols: number;

    private sourcePosition: Position;

    private offset = new Position(0,0);

    constructor(
        rows: number,
        cols: number,
        sourcePosition: Position
    ) {

        this.rows = rows;
        this.cols = cols;

        this.sourcePosition = sourcePosition;

        this.offset = new Position(
            this.sourcePosition.x % 1,
            this.sourcePosition.y % 1
        );

        if(0 !== this.offset.x){
            this.rows += 2;
        }
        else if (0 === this.rows % 2) {

            this.rows += 2;

            if(0 === this.offset.x){
                this.offset = this.offset.move(new Position(-0.5, 0))
            }

        }

        if(0 !== this.offset.y){
            this.cols += 2;
        }
        else if (0 === this.cols % 2) {

            this.cols += 2;

            if(0 === this.offset.y) {
                this.offset = this.offset.move(new Position(0, -0.5))
            }

        }



        /*
        this.offset = new Position(
            (rawCols - this.cols) / 2,
            (rawRows - this.rows) / 2
        );


        this.zero = zero;

        this.relativeMap = {};
        this.absoluteMap = {};

        this.createGrid();
        */
        /*
        for (let positionWithLivingCells of habitat.get()) {

            const cellIndex = this.absoluteMap[positionWithLivingCells.x][positionWithLivingCells.y];

            this.cells[cellIndex].setType(livingCell);

        }

        const centerCell = this.getCellByAbsolutePosition(0, 0);
        if (undefined !== centerCell && 'living' !== centerCell.getType().name) {

            centerCell.setType(centerCellType);

        }
       */

    }

    /*
    private createGrid(): void {

        this.cells = [];

        // first quadrant

        const end = new Position(
            Math.ceil((this.cols - 1) / 2),
            Math.ceil((this.rows - 1) / 2)
        );

        let start = new Position(
            -1 * end.x,
            -1 * end.y
        );

        while (start.y < this.rows / 2) {

            while (start.x < this.cols / 2) {

                if (undefined === this.relativeMap[start.x]) {
                    this.relativeMap[start.x] = {};
                }

                this.relativeMap[start.x][start.y] = this.cells.length;

                const gridCell = new GridCell(
                    start,
                    this.zero
                );

                const absolutePosition = gridCell.absolutePosition;
                if (undefined === this.absoluteMap[absolutePosition.x]) {
                    this.absoluteMap[absolutePosition.x] = {};
                }


                this.absoluteMap[absolutePosition.x][absolutePosition.y] = this.cells.length;

                this.cells.push(
                    gridCell
                );

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

    */

    public getSourcePosition():Position{
        return this.sourcePosition;
    }

    public getOffset():Position{
        return this.offset;
    }

    public getCols(): number {
        return this.cols;
    }

    public getRows(): number {
        return this.rows;
    }

    /*
    public getCells() {
        return this.cells;
    }

    public getCell(col: number, row: number): GridCell {

        const index = this.relativeMap[col][row];

        return this.cells[index];
    }

    public getCellByAbsolutePosition(x: number, y: number): GridCell {

        if (undefined === this.absoluteMap[x]) {
            return undefined;
        }

        if (undefined === this.absoluteMap[x][y]) {
            return undefined;
        }

        const index = this.absoluteMap[x][y];

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
    */

}