import {CellType} from '@Conway/Frontend/CellType/CellType';
import {CellUnkown} from '@Conway/Frontend/CellType/CellUnkown';
import {CellTypesFactory} from '@Conway/Frontend/CellType/CellTypesFactory';
import {Position} from '@Conway/Geometry/Position';

export class GridCell {

    public readonly relativePosition: Position;
    public readonly absolutePosition: Position;
    public readonly offset: Position;

    private type: CellType = new CellUnkown();

    constructor(
        relativePosition: Position,
        absolutePosition: Position,
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

        this.setType(CellTypesFactory.get().checkerboardDark());

        if ( (0 === y % 2 && 0 === x % 2 ) || (0 !== y % 2 && 0 !== x % 2)) {
            this.setType(CellTypesFactory.get().checkerboardLight());
        }

        if (0 === x && 0 === y) {
            this.setType(CellTypesFactory.get().center());
        }

    }

    public setType(type: CellType): void {
        this.type = type;
    }

    public getType(): CellType {
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
