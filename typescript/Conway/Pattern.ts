import {Position} from './Position';
import {CellMatrix} from './CellMatrix';

export class Pattern {

    private name: String;

    private matrix: CellMatrix;

    constructor(name: String, matrix: CellMatrix) {

        this.name = name;

        this.matrix = matrix;

    }

    public getMatrix(): CellMatrix {

        return this.matrix;
    }

    public getWidth(): number {
        return this.matrix.width();
    }

    public getHeight(): number {
        return this.matrix.height();
    }

    public mirrorVertical(): void {

        const mirror = new CellMatrix();

        for (const position of this.matrix.all()) {

            mirror.add(
                new Position(
                    position.x,
                    -1 * position.y
                )
            );

        }

        this.matrix = mirror;

    }

    public mirrorHorizontal(): void {

        const mirror = new CellMatrix();

        for (const position of this.matrix.all()) {

            mirror.add(
                new Position(
                    -1 * position.x,
                    position.y
                )
            );

        }

        this.matrix = mirror;

    }

}
