import {Position} from './position';
import {Pattern} from './pattern';

interface CellMatrixInterface {
    [index: string]: Position;
}

export class CellMatrix {

    private matrix: CellMatrixInterface = {};

    public has(position: Position): boolean {

        return (undefined !== this.matrix[position.toString()]);

    }

    public add(position: Position): void {

        if (true === this.has(position)) {
            return;
        }

        this.matrix[position.toString()] = position;

    }

    public remove(position: Position): void {

        if (false === this.has(position)) {
            return;
        }

        delete this.matrix[position.toString()];

    }

    public all(): Position[] {

        const positions: Position[] = [];

        for (const index in this.matrix) {

            positions.push(this.matrix[index]);

        }

        return positions;

    }

    public seedPattern(pattern: Pattern, moveBy = new Position(0, 0)): void {

        const positions = pattern.get();

        for (let position of positions) {

            this.add(position.move(moveBy));

        }

    }

}
