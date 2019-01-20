import { Position } from 'Conway/position';

export class Cell {

    public readonly position: Position;

    private nowliving: Boolean = false;

    private thenLiving: Boolean = true;

    constructor(position: Position) {
        this.position = position;
    }

    /**
     * Getter for x allows access like position.x
     */
    get x(): Number {
        return this.position.x;
    }

    get y(): Number {
        return this.position.y;
    }

    isAlive(): Boolean {
        return (true === this.nowliving);
    }

    kill(): void {
        this.thenLiving = false;
    }

    elapse(): void {

        if (true === this.thenLiving) {
            this.nowliving = true;
        }
        else {
            this.nowliving = false;
        }
    }

}