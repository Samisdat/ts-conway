import {Position} from '@Conway/Conway/Position';

export class IntegerPosition extends Position {

    constructor(x: number, y: number) {
        super(x, y);

        this.ensureInteger();

    }

    protected ensureInteger() {

        if (0 !== this.x % 1) {
            throw new Error('x not an integer value');
        }

        if (0 !== this.y % 1) {
            throw new Error('y not an integer value');
        }

    }

}
