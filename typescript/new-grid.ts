import { Position } from './position';
import { GridCell } from './Grid/GridCell';

import { Habitat } from './habitat';

import { CellTypesCenter } from 'CellType/CellTypesCenter';
import {GridDimension} from 'Grid/GridDimension';

const centerCellType: CellTypesCenter = new CellTypesCenter();

export class NewGrid {

    private gridDimension: GridDimension;
    private sourcePosition: Position;

    private offset: Position;

    private cells: GridCell[] = [];

    public readonly center: Position;

    constructor(
        gridDimension: GridDimension,
        sourcePosition: Position,
        offset: Position
    ) {

        this.ensureSourcePositionIsInteger(sourcePosition);
        this.ensureOffsetBetweenMinusOneAndOne(offset);

        this.gridDimension = gridDimension;

        this.sourcePosition = sourcePosition;

        this.offset = offset;

        // create rows

        let relativePointer = new Position(0, 0);
        let absolutePointer = this.sourcePosition;

        this.center = relativePointer.clone().move(
            new Position(
                Math.floor(this.gridDimension.rows / 2),
                Math.floor(this.gridDimension.cols / 2)
            )
        );

        relativePointer = relativePointer.move(
            new Position(
                -1 * Math.floor(this.gridDimension.rows / 2),
                -1 * Math.floor(this.gridDimension.cols / 2)
            )
        );

        absolutePointer = absolutePointer.move(
            new Position(
                -1 * Math.floor(this.gridDimension.rows / 2),
                -1 * Math.floor(this.gridDimension.cols / 2)
            )
        );

        const moveRight = new Position(
            1,
            0
        );

        // @TODO Use Bounds

        for (let top = 0; top < this.gridDimension.cols; top += 1) {

            for (let right = 0; right < this.gridDimension.rows; right += 1) {

                this.cells.push(
                    new GridCell(
                            relativePointer,
                            absolutePointer,
                            this.offset
                    )
                );

                relativePointer = relativePointer.move(
                    moveRight
                );

                absolutePointer = absolutePointer.move(moveRight);

            }

            relativePointer = relativePointer.move(
                new Position(-1 * this.gridDimension.rows, 1),
            );

            absolutePointer = absolutePointer.move(
                new Position(-1 * this.gridDimension.rows, 1),
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

    private ensureSourcePositionIsInteger(sourcePosition: Position) {

        if (0 !== sourcePosition.x % 1) {
            throw new Error('sourcePosition.x must be integer');
        }
        if (0 !== sourcePosition.y % 1) {
            throw new Error('sourcePosition.y must be integer');
        }

    }

    private ensureOffsetBetweenMinusOneAndOne(offset: Position) {

        if (1 < Math.abs(offset.x )) {
            throw new Error('offset.x must be between -1 and 1');
        }

        if (1 < Math.abs(offset.y)) {
            throw new Error('offset.y must be between -1 and 1');
        }


    }

    public getSourcePosition(): Position {
        return this.sourcePosition;
    }

    public getOffset(): Position {
        return this.offset;
    }

    public getCols(): number {
        return this.gridDimension.cols;
    }

    public getRows(): number {
        return this.gridDimension.rows;
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