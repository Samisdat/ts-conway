import { CellType } from './CellType';

export class CellUnkown extends CellType {

    public readonly name: string = 'none';

    public constructor(hex = undefined) {
        super(undefined);
    }

}
