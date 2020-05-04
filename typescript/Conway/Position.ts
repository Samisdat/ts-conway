export class Position {

    public readonly  x: number;
    public readonly  y: number;

    constructor(x: number, y: number) {

        if (-0 === x) {
            x = 0;
        }

        if (-0 === y) {
            y = 0;
        }

        this.x = x;
        this.y = y;
    }

    public move(position: Position): Position {
        return new Position(
            this.x + position.x,
            this.y + position.y
        );
    }

    public inverse(): Position {
        return new Position(
            -1 * this.x,
            -1 * this.y
        );
    }

    public compare(position: Position): Boolean {

        return (position.x === this.x && position.y === this.y);

    }

    public getNeighbours(): Position[] {

        let neighbours: Position[] = [];

        // neighbours on bottom
        neighbours.push(
            new Position(this.x - 1, this.y - 1)
        );
        neighbours.push(
            new Position(this.x, this.y - 1)
        );
        neighbours.push(
            new Position(this.x + 1, this.y - 1)
        );

        // neighbours on the left and on the right
        neighbours.push(
            new Position(this.x - 1, this.y)
        );
        neighbours.push(
            new Position(this.x + 1, this.y)
        );

        // neighbours on top
        neighbours.push(
            new Position(this.x - 1, this.y + 1)
        );
        neighbours.push(
            new Position(this.x, this.y + 1)
        );
        neighbours.push(
            new Position(this.x + 1, this.y + 1)
        );

        return neighbours;
    }

    public clone(): Position {
        return new Position(
            this.x,
            this.y
        );
    }

    public toString(): string {

        let str = '';

        str += (0 <= this.x) ? '+' : '';
        str += this.x;

        str += '/';

        str += (0 <= this.y) ? '+' : '';
        str += this.y;

        return str;

    }
}
