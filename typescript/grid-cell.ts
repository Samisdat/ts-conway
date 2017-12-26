import { GridCellType } from './grid-cell-types/grid-cell-type';
import NoType from './grid-cell-types/no-type';

import Position from './position';

export default class GridCell {

    private position: Position;
    private gridOffset: Position;

    private type: GridCellType = new NoType();

    constructor(position: Position, gridOffset: Position ) {

        this.position = position;
        this.gridOffset = gridOffset;

    }

    public setType(type: GridCellType): void {
        this.type = type;
    }

    public getType(): GridCellType {
        return this.type;
    }

    public getColor(): string {
        return this.type.toHex();
    }

    get x(): number {
        return this.position.x;
    }
    get y(): number {
        return this.position.y;
    }
}