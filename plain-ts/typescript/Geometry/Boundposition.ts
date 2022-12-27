import {Position} from '@Conway/Geometry/Position';
import {Bound} from '@Conway/Geometry/Bound';

export class Boundposition {

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

    public isWithin(test: Position): boolean {
        return (this.x.isWithin(test.x) && this.y.isWithin(test.y));
    }

    public confine(value: Position): Position {

        return new Position(
            this.x.confine(value.x),
            this.y.confine(value.y)
        );

    }

    public bottomLeft(): Position{

        return new Position(this.x.getMin(), this.y.getMin());

    }

    public topRight(): Position{

        return new Position(this.x.getMax(), this.y.getMax());

    }

    public getWidth(): number{

        return this.x.getMax() - this.x.getMin() + 1;

    }

    public getHeight(): number{

        return this.y.getMax() - this.y.getMin() + 1;

    }

    public expand(position: Position): void{

        if(true === this.isWithin(position)){
            return;
        }

        this.x.expand(position.x);
        this.y.expand(position.y);

    }

}
