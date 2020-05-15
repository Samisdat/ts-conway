import {Position} from '@Conway/Geometry/Position';
import {Boundposition} from '@Conway/Geometry/Boundposition';

interface MatrixInterface {
    [index: string]: Position;
}

interface Dimension {
    width: number;
    height: number;
}

type PositionAttributes = 'x' | 'y';

export class Matrix {

    private matrix: MatrixInterface = {};

    private boundposition: Boundposition = new Boundposition(
        new Position(0, 0),
        new Position(0, 0),
    );

    public has(position: Position): boolean {

        return (undefined !== this.matrix[position.toString()]);

    }

    public add(position: Position): void {

        if (true === this.has(position)) {
            return;
        }

        this.matrix[position.toString()] = position;

        this.boundposition.expand(position);

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

    public getBound(): Boundposition {

        return this.boundposition;

    }

    private getDimension(): Dimension {

        const boundPosition = this.getBound();

        const dimension: Dimension = {
            width: boundPosition.topRight().x - boundPosition.bottomLeft().x,
            height: boundPosition.topRight().y - boundPosition.bottomLeft().y,
        }

        return dimension;

    }

    public width(): number {

        return this.getDimension().width;

    }

    public height(): number {

        return this.getDimension().height;

    }

}
