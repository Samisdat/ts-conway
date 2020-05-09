import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Position} from '@Conway/Conway/Position';
import {readPatternFromPlainFile} from '@Conway/Conway/Pattern/readPatternFromPlainFile';

export class Pattern {

    private name: String;

    private matrix: CellMatrix;

    constructor(name: String, matrix: CellMatrix) {

        this.name = name;

        this.matrix = matrix;

    }

    public static fromString(patternString: string): Pattern{
        return readPatternFromPlainFile(patternString);
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

    public toArray(): number[][]{

        let farLeft = this.getWidth();
        let farBottom = this.getHeight();

        for (const position of this.matrix.all()) {

            if (farLeft > position.x) {
                farLeft = position.x;
            }
            if (farBottom > position.y) {
                farBottom = position.y;
            }

        }

        const moved = new CellMatrix();

        for (const position of this.matrix.all()) {

            moved.add(position.move(
                new Position(
                    -1 * farLeft,
                    -1 * farBottom
                )
                )
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

    public toString(): string{

        const matrixAsArray = this.toArray();

        let patternAsString = '!Name: ' + this.name + '\n';

        for (let y = 0; y < matrixAsArray.length; y += 1) {

            const row: string = matrixAsArray[y].map((cell) => {

                if (0 === cell) {
                    return '.';
                }

                return 'O';

            }).join('');

            patternAsString += row + '\n';

        }

        return patternAsString.trim();

    }

}
