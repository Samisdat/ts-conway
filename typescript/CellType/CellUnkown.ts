import { CellTypeInterface } from './CellTypeInterface';

export class CellUnkown extends CellTypeInterface {

    public readonly name: string = 'none';

    public constructor(hex = undefined) {
        super(undefined);
    }

}
