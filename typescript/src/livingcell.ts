import Cell from './cell';
import Position from './position';

export default class LivingCell extends Cell {

    constructor(position: Position) {
        super(position);

        this.elapse();

    }

}