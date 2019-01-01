import { CellTypeCheckerboardLight, CellTypeCheckerboardDark, CellUnkown, CellTypeInterface } from '@CellType/index';

const darkColor: CellTypeCheckerboardDark = new CellTypeCheckerboardDark();
const lightColor: CellTypeCheckerboardLight = new CellTypeCheckerboardLight();


import Position from '../position';

export class GridCell {

    public readonly relativePosition: Position;
    public readonly absolutePosition: Position;
    private gridOffset: Position;

    private type: CellTypeInterface = new CellUnkown();

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
        return this.relativePosition.x;
    }
    get y(): number {
        return this.relativePosition.y;
    }

}