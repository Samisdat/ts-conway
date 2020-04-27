import {Cell} from './cell';
import {Position} from './position';

interface CellMatrixInterface {
    [index: string]: Cell;
}

export class CellMatrix {

    private matrix: CellMatrixInterface = {};

    public get(position: Position): Cell | undefined {

        if (undefined !== this.matrix[position.toString()]) {
            return this.matrix[position.toString()];
        }

        return undefined;


    }

    public add(cell: Cell): void {

        if (undefined !== this.matrix[cell.position.toString()]) {
            console.log('argh');
        }

        this.matrix[cell.position.toString()] = cell;

    }

    public remove(cell: Cell): void {

        if (undefined !== this.matrix[cell.position.toString()]) {
            delete this.matrix[cell.position.toString()];
        }

    }

    public all(): Cell[] {

        const cells: Cell[] = [];

        for (const index in this.matrix) {

            cells.push(this.matrix[index]);

        }

        return cells;

    }


}
