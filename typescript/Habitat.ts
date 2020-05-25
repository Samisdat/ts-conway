import {Position} from '@Conway/Geometry/Position';
import {Population} from '@Conway/Population';
import {GridCell} from '@Conway/Frontend/Grid/GridCell';
import {CellTypesFactory} from '@Conway/Frontend/CellType/CellTypesFactory';
import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';

interface MatrixCol {
    [index: number]: number;
}

interface MatrixRow {
    [index: number]: MatrixCol;
}

export class Habitat {

    private gridDimension: GridDimension;
    private sourcePosition: Position;

    private offset: Position;

    private cells: GridCell[] = [];

    public readonly center: Position;

    private absoluteMap: MatrixRow = {};

    constructor(
        population: Population,
        gridDimension: GridDimension,
        sourcePosition: Position,
        offset: Position
    ) {

        Habitat.ensureOffsetBetweenMinusOneAndOne(offset);

        this.gridDimension = gridDimension;

        this.sourcePosition = sourcePosition;

        this.offset = offset;

        let relativePointer = new Position(0, 0);
        let absolutePointer = this.sourcePosition as Position;

        const inMiddleOfGrid = new Position(
            Math.floor(this.gridDimension.rows / 2),
            Math.floor(this.gridDimension.cols / 2)
        );


        this.center = relativePointer.move(inMiddleOfGrid);

        relativePointer = relativePointer.move(inMiddleOfGrid.inverse());

        absolutePointer = absolutePointer.move(inMiddleOfGrid.inverse());

        this.createGridCells(relativePointer, absolutePointer);

        this.markLivingCells(population);

    }

    private createGridCells(relativePointer: Position, absolutePointer: Position){

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
                new Position(-1 * this.gridDimension.rows, 1),
            );

            absolutePointer = absolutePointer.move(
                new Position(-1 * this.gridDimension.rows, 1),
            );

        }

    }

    private markLivingCells(population: Population){

        for (const positionWithLivingCells of population.get()) {

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

    private static ensureOffsetBetweenMinusOneAndOne(offset: Position) {

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

}
