import { CellTypeInterface } from '@CellType/CellTypeInterface';

export class CellUnkown implements CellTypeInterface {

    public readonly name: string = 'none';

    public readonly hex: string = undefined;

}