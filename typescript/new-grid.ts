import { Position } from './position';
import { GridCell } from './Grid/GridCell';

import { Habitat } from './habitat';

import { CellTypesCenter } from 'CellType/CellTypesCenter';

const centerCellType: CellTypesCenter = new CellTypesCenter();

export class NewGrid {

    private rows: number;
    private cols: number;

    private sourcePosition: Position;

    private offset = new Position(0, 0);

    private cells: GridCell[] = [];

    constructor(
        rows: number,
        cols: number,
        sourcePosition: Position
    ) {

        this.ensureRows(rows);
        this.ensureCols(cols);

        this.rows = rows;
        this.cols = cols;

        this.sourcePosition = sourcePosition;

        this.offset = new Position(
            this.sourcePosition.x % 1,
            this.sourcePosition.y % 1
        );

        if (0 !== this.offset.x) {
            this.rows += 2;
        }

        if (0 !== this.offset.y) {
            this.cols += 2;
        }

        // create rows

        let relativePointer = new Position(0, 0);
        let absolutePointer = this.sourcePosition.move(this.offset);

        console.log(relativePointer);
        console.log(absolutePointer);

        relativePointer = relativePointer.move(
            new Position(
                -1 * Math.floor(this.rows / 2),
                -1 * Math.floor(this.cols / 2)
            )
        );


        absolutePointer = absolutePointer.move(
            new Position(
                -1 * Math.floor(this.rows / 2),
                -1 * Math.floor(this.cols / 2)
            )
        );

        const moveRight = new Position(
            1,
            0
        );

        // @TODO Use Bounds

        for (let top = 0; top < this.cols; top += 1) {

            for (let right = 0; right < this.rows; right += 1) {

                this.cells.push(
                    new GridCell(
                            relativePointer,
                            absolutePointer
                    )
                );

                relativePointer = relativePointer.move(
                    moveRight
                );

                absolutePointer = absolutePointer.move(moveRight);

            }

            relativePointer = relativePointer.move(
                new Position(-1 * this.rows, 1),
            );

            absolutePointer = absolutePointer.move(
                new Position(-1 * this.rows, 1),
            );

        }

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

    private ensureRows(rows:number){

        if(0 === rows % 2){
            throw new Error('not yet implemented');
        }

    }

    private ensureCols(cols:number){

        if(0 === cols % 2){
            throw new Error('not yet implemented');
        }

    }

    public getSourcePosition(): Position {
        return this.sourcePosition;
    }

    public getOffset(): Position {
        return this.offset;
    }

    public getCols(): number {
        return this.cols;
    }

    public getRows(): number {
        return this.rows;
    }

    public getCells() {
        return this.cells;
    }

    /*
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
    */

}