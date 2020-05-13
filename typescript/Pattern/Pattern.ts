import {Position} from '@Conway/Geometry/Position';
import {readPatternFromPlainFile} from '@Conway/Pattern/readPatternFromPlainFile';
import {Matrix} from '@Conway/Geometry/Matrix';
import {patternToString} from '@Conway/Pattern/patternToString';

export class Pattern {

    private name: string;

    private matrix: Matrix;

    constructor(name: string, matrix: Matrix) {

        this.name = name;

        this.matrix = matrix;

    }

    public static fromString(patternString: string): Pattern {
        return readPatternFromPlainFile(patternString);
    }

    public getName(): string {
        return this.name;
    }

    public getMatrix(): Matrix {

        return this.matrix;
    }

    public getWidth(): number {
        return this.matrix.width();
    }

    public getHeight(): number {
        return this.matrix.height();
    }

    public mirrorVertical(): void {

        const mirror = new Matrix();

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

        const mirror = new Matrix();

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

    public rotate(): void {

        const matrix = this.toArray();

        const rotated: number[][] = [];

        for (let x = 0; x < matrix[0].length; x += 1) {

            const row: number[] = [];

            for (let y = matrix.length - 1; y >= 0 ; y -= 1) {

                row.push(matrix[y][x]);

            }

            rotated.push(row);

        }
        const rotatedMatrix = new Matrix();

        for (let y = 0; y < rotated.length; y += 1) {

            for (let x = 0; x < rotated[y].length; x += 1) {

                if (0 === rotated[y][x]) {
                    continue;
                }

                rotatedMatrix.add(new Position(x, y));

            }

        }

        this.matrix = rotatedMatrix;

    }

    public toArray(): number[][] {

        const moved = new Matrix();

        const moveBy = this.getMatrix().getBound().bottomLeft().inverse();

        for (const position of this.matrix.all()) {

            moved.add(
                position.move(moveBy)
            );

        }


        const matrixAsArray: number[][] = [];

        for (let y = 0; y < this.getHeight() + 1; y += 1) {

            const row: number[] = [];

            for (let x = 0; x < this.getWidth() + 1; x += 1) {

                const cell: number = (true === moved.has(new Position(x, y))) ? 1 : 0;

                row.push(cell);

            }

            matrixAsArray.push(row);
        }

        return matrixAsArray;

    }

    public toString(): string {

        return patternToString(this);

    }

}
