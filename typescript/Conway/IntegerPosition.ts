import {Position} from '@Conway/Conway/Position';

export class IntegerPosition extends Position {

    constructor(x: number, y: number) {
        super(x, y);

        this.ensureInteger();

    }



}
