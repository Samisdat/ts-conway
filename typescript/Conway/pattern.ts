import { Position } from 'Conway/position';

export class Pattern {

    private positions: Position[] = [];

    private width: number;

    private height: number;

    constructor(name: String, matrix: number[][]) {

        this.setPattern(matrix);

    }

    private validatePattern(matrix: number[][]): void {
        let lengths = [];

        for (let row of matrix) {
            lengths.push(row.length);
        }

        lengths = lengths.filter(function (value, index, self) {
            return self.indexOf(value) === index;
        });

        if (1 !== lengths.length) {
            throw new Error('all rows must contain the same ammout of cols');
        }

        this.height = matrix.length;
        this.width = matrix[0].length;
    }

    private setPattern(matrix: number[][]): void {

        this.validatePattern(matrix);

        for (let row = 0; row < matrix.length; row += 1) {

            for (let col = 0; col < matrix[row].length; col += 1) {

                if (1 === matrix[row][col]) {
                    this.positions.push(
                        new Position(col, row)
                    );
                }

            }

        }

    }

    public get(): Position[] {

        const move = new Position(
            -1 * Math.floor(this.width / 2),
            -1 * Math.floor(this.height / 2)
        );

        let positions: Position[] = [];

        for (let position of this.positions) {
            positions.push(
                position.move(move)
            );
        }

        return positions;

    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public mirrorVertical(): void {

        for (let i = 0, x = this.positions.length; i < x; i += 1) {

            this.positions[i] = new Position(
                this.positions[i].x,
                this.width - 1 - this.positions[i].y
            );

        }

    }

    public mirrorHorizontal(): void {

        for (let i = 0, x = this.positions.length; i < x; i += 1) {

            this.positions[i] = new Position(
                this.width - 1 - this.positions[i].x,
                this.positions[i].y
            );

        }

    }

    private rotate90(): void {

        let tmp: number[][] = [];

        for (let i = 0; i < this.height; i += 1) {
            tmp.push(
                Array.apply(0, Array(this.width)).map(function () { return 0; })
            );
        }

        for (let position of this.positions) {

            tmp[position.y][position.x] = 1;

        }

        let rotate: number[][] = [];

        for (let x = 0; x < this.width; x += 1) {

            let row = [];

            for (let y = 0; y < this.height; y += 1) {

                row.push(tmp[y][x]);
            }
            rotate.push(row.reverse());
        }

        this.positions = [];

        for (let y = 0; y < rotate.length; y += 1) {
            for (let x = 0; x < rotate[y].length; x += 1) {

                if (1 === rotate[y][x]) {
                    this.positions.push(new Position(x, y));
                }
            }

        }

    }

    public getRotateSteps(angle: number): number {

        let by90 = (angle % 360) / 90;

        if (0 <= by90) {
            return by90;
        }

        return 4 + by90;
    }

    public rotate(angle: number): void {

        if (0 !== angle % 90) {
            throw new Error('angle must be 0 or a multiple of 90');
        }

        let by90 = this.getRotateSteps(angle);

        for (let i = 0; i < by90; i += 1) {
            this.rotate90();
        }

    }

}