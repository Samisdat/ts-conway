import { GridCellType } from './grid-cell-type';

export default class CellLiving implements GridCellType {

    get name(): string {
        return 'living';
    }

    get hex(): string {
        return '#000000';
    }
}