import {Cell} from './cell';
import {Position} from './position';
import {Pattern} from './pattern';

interface CellMatrixInterface {
    [index: string]: Cell;
}

export class CellMatrix {

    private matrix: CellMatrixInterface = {};

    public has(position: Position): boolean {

        return (undefined !== this.matrix[position.toString()]);

    }

    public get(position: Position): Cell | undefined {

        if (undefined !== this.matrix[position.toString()]) {
            return this.matrix[position.toString()];
        }

        return undefined;


    }

    public add(cell: Cell): void {

        if (undefined !== this.matrix[cell.position.toString()]) {
            return;
        }

        this.matrix[cell.position.toString()] = cell;

    }

    public remove(position: Position): void {

        if (undefined !== this.matrix[position.toString()]) {
            delete this.matrix[position.toString()];
        }

    }

    public all(): Cell[] {

        const cells: Cell[] = [];

        for (const index in this.matrix) {

            cells.push(this.matrix[index]);

        }

        return cells;

    }

    public seed(position: Position): void {

        this.add(new Cell(position));
    }

    public seedPattern(pattern: Pattern, moveBy = new Position(0, 0)): void {

        const positions = pattern.get();

        for (let position of positions) {

            this.add(new Cell(position.move(moveBy)));

        }

    }

}
