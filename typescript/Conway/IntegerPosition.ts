import {Position} from './Position';
import {Integer} from './Integer';

export class IntegerPosition extends Position {

    public readonly  x: number;
    public readonly  y: number;

    constructor(x: number, y: number) {
        super(x, y);

        this.x = new Integer(x).value;
        this.y = new Integer(y).value;

    }

    public move(position: IntegerPosition): IntegerPosition {
        return new IntegerPosition(
            this.x + position.x,
            this.y + position.y
        );
    }

    public inverse(): IntegerPosition {
        return new IntegerPosition(
            -1 * this.x,
            -1 * this.y
        );
    }

    public compare(position: IntegerPosition): Boolean {

        return (position.x === this.x && position.y === this.y);

    }

    public getNeighbours(): IntegerPosition[] {

        let neighbours: IntegerPosition[] = [];

        // neighbours on bottom
        neighbours.push(
            new IntegerPosition(this.x - 1, this.y - 1)
        );
        neighbours.push(
            new IntegerPosition(this.x, this.y - 1)
        );
        neighbours.push(
            new IntegerPosition(this.x + 1, this.y - 1)
        );

        // neighbours on the left and on the right
        neighbours.push(
            new IntegerPosition(this.x - 1, this.y)
        );
        neighbours.push(
            new IntegerPosition(this.x + 1, this.y)
        );

        // neighbours on top
        neighbours.push(
            new IntegerPosition(this.x - 1, this.y + 1)
        );
        neighbours.push(
            new IntegerPosition(this.x, this.y + 1)
        );
        neighbours.push(
            new IntegerPosition(this.x + 1, this.y + 1)
        );

        return neighbours;
    }

    public clone(): IntegerPosition {
        return new IntegerPosition(
            this.x,
            this.y
        );
    }

}
