import { GridCellType } from './grid-cell-types/grid-cell-type';
import NoType from './grid-cell-types/no-type';

import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';

const darkColor: CheckerboardDark = new CheckerboardDark();
const lightColor: CheckerboardLight = new CheckerboardLight();


import Position from './position';

export default class GridCell {

    public readonly relativePosition: Position;
    public readonly absolutePosition: Position;
    private gridOffset: Position;

    private type: GridCellType = new NoType();

    constructor(position: Position, gridOffset: Position) {

        this.relativePosition = position;

        this.absolutePosition = new Position(
            this.relativePosition.x - gridOffset.x,
            this.relativePosition.y - gridOffset.y
        );

        this.setCheckerboardColor();

    }

    private setCheckerboardColor(): void {

        const x = this.absolutePosition.x;
        const y = this.absolutePosition.y;

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
        return this.type.hex;
    }

    get x(): number {
        return this.relativePosition.x;
    }
    get y(): number {
        return this.relativePosition.y;
    }

}