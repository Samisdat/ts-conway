import {Position} from '@Conway/Geometry/Position';

interface CellMatrixInterface {
    [index: string]: Position;
}

interface Dimension {
    width: number;
    height: number;
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

    private getDimension(): Dimension {

        const dimension: Dimension = {
            width: 0,
            height: 0
        }

        let left = 0;
        let right = 0;

        let top = 0;
        let bottom = 0;

        for (const position of this.all()) {

            if (position.x < left) {
                left = position.x;
            }

            if (position.x > right) {
                right = position.x;
            }

            if (position.y < bottom) {
                bottom = position.y;
            }

            if (position.y > top) {
                top = position.y;
            }

        }

        if (0 > left && 0 < right) {
            dimension.width = right - left;
        }
        else{
            dimension.width = right - left;
        }

        if (0 > bottom && 0 < top) {
            dimension.height = top - bottom;
        }
        else{
            dimension.height = top - bottom;
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
