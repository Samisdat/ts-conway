import { CellTypeInterface } from 'CellType/CellTypeInterface';

export class CellTypeLiving implements CellTypeInterface {

    public readonly name: string = 'living';

    public readonly hex: string = '#000000';

}