import { GridCellType } from './grid-cell-types/grid-cell-type';
import NoType from './grid-cell-types/no-type';

import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';

const darkColor: CheckerboardDark = new CheckerboardDark();
const lightColor: CheckerboardLight = new CheckerboardLight();


import Position from './position';

export default class GridCell {

    private position: Position;
    private gridOffset: Position;

    private type: GridCellType = new NoType();

    constructor(position: Position, gridOffset: Position) {

        this.position = position;
        this.gridOffset = gridOffset;

        this.setCheckerboardColor();

    }

    private setCheckerboardColor():void{

        const absolutePosition = new Position(
            this.position.x - this.gridOffset.x,
            this.position.y - this.gridOffset.y
        );

        const x = absolutePosition.x;
        const y = absolutePosition.y;

        this.setType(darkColor);

        if (0 === y % 2) {
            if (0 === x % 2) {
                this.setType(lightColor);
            }
        }

        if (0 !== y % 2) {
            if (0 !== x % 2) {
                this.setType(lightColor);
            }
        }

        
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

    public getGridOffset(): Position {
        return this.gridOffset
    }
}