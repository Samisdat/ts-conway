import { Position } from './position';
import { Bound } from './bound';

export class BoundPosition {

    private x: Bound;
    private y: Bound;

    constructor(topLeft: Position, bottomRight: Position) {

        if (bottomRight.x < topLeft.x) {
            throw new Error('bottomRight must be right from topLeft');
        }

        if (bottomRight.y < topLeft.y) {
            throw new Error('bottomRight must be below from topLeft');
        }

        this.x = new Bound(topLeft.x, bottomRight.x);
        this.y = new Bound(topLeft.y, bottomRight.y);

    }

    public isWithin(test: Position): Boolean {
        return (this.x.isWithin(test.x) && this.y.isWithin(test.y));
    }

    public confine(value: Position): Position {

        return new Position(
            this.x.confine(value.x),
            this.y.confine(value.y)
        );

    }

}