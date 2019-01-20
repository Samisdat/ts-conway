import { Cell } from 'Conway/cell';
import { Position } from 'Conway/position';

export class LivingCell extends Cell {

    constructor(position: Position) {

        super(position);

        this.elapse();

    }

}