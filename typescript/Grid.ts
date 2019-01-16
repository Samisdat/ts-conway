import { Position } from './Conway/position';
import { GridCell } from './Grid/GridCell';
import { Habitat } from './Conway/habitat';
import { CellTypeLiving } from 'CellType/CellTypeLiving';
import { CellTypesCenter } from 'CellType/CellTypesCenter';
import { GridDimension } from 'Grid/GridDimension';
import { IntegerPosition } from './Conway/IntegerPosition';
import {CellTypesFactory} from 'CellType/CellTypesFactory';

export class Grid {

    private readonly habitat: Habitat;

    private gridDimension: GridDimension;
    private sourcePosition: IntegerPosition;

    private offset: Position;

    private cells: GridCell[] = [];

    public readonly center: IntegerPosition;

    private absoluteMap: {} = {};

    constructor(
        habitat: Habitat,
        gridDimension: GridDimension,
        sourcePosition: IntegerPosition,
        offset: Position
    ) {

        this.ensureOffsetBetweenMinusOneAndOne(offset);

        this.habitat = habitat;

        this.gridDimension = gridDimension;

        this.sourcePosition = sourcePosition;

        this.offset = offset;

        // create rows

        let relativePointer = new IntegerPosition(0, 0);
        let absolutePointer = this.sourcePosition;

        this.center = relativePointer.clone().move(
            new IntegerPosition(
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

                const gridCell = new GridCell(
                    relativePointer,
                    absolutePointer,
                    this.offset
                );

                const absolutePosition = gridCell.absolutePosition;

                if (undefined === this.absoluteMap[absolutePosition.x]) {
                    this.absoluteMap[absolutePosition.x] = {};
                }

                this.absoluteMap[absolutePosition.x][absolutePosition.y] = this.cells.length;

                this.cells.push(gridCell);

                relativePointer = relativePointer.move(
                    moveRight
                );

                absolutePointer = absolutePointer.move(moveRight);

            }

            relativePointer = relativePointer.move(
                new IntegerPosition(-1 * this.gridDimension.rows, 1),
            );

            absolutePointer = absolutePointer.move(
                new IntegerPosition(-1 * this.gridDimension.rows, 1),
            );

        }

        for (let positionWithLivingCells of habitat.get()) {

            if (undefined === this.absoluteMap[positionWithLivingCells.x]) {
                continue;
            }
            if (undefined === this.absoluteMap[positionWithLivingCells.x][positionWithLivingCells.y]) {
                continue;
            }

            const cellIndex = this.absoluteMap[positionWithLivingCells.x][positionWithLivingCells.y];

            this.cells[cellIndex].setType(CellTypesFactory.get().living());

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

    public getSourcePosition(): IntegerPosition {
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

    public getCell(col: number, row: number): GridCell {

        for (const cell of this.cells) {

            if (cell.relativePosition.x === row && cell.relativePosition.y === col) {
                return cell;
            }
        }

        return undefined;

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

}