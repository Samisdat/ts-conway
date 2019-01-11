import { CellTypeCheckerboardLight, CellTypeCheckerboardDark, CellUnkown, CellTypeInterface } from 'CellType/index';

const darkColor: CellTypeCheckerboardDark = new CellTypeCheckerboardDark();
const lightColor: CellTypeCheckerboardLight = new CellTypeCheckerboardLight();


import { Position } from '../Conway/position';
import {IntegerPosition} from '../Conway/IntegerPosition';

export class GridCell {

    public readonly relativePosition: IntegerPosition;
    public readonly absolutePosition: IntegerPosition;
    public readonly offset: Position;

    private type: CellTypeInterface = new CellUnkown();

    constructor(
        relativePosition: IntegerPosition,
        absolutePosition: IntegerPosition,
        offset: Position
    ) {

        this.relativePosition = relativePosition;

        this.absolutePosition = absolutePosition;

        this.offset = offset;

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

    public setType(type: CellTypeInterface): void {
        this.type = type;
    }

    public getType(): CellTypeInterface {
        return this.type;
    }

    public getColor(): string {
        return this.type.hex;
    }

    get x(): number {
        return this.relativePosition.x + this.offset.x;
    }
    get y(): number {
        return this.relativePosition.y + this.offset.y;
    }

}