import { GridCellType } from './grid-cell-type';

export default class CellCenter implements GridCellType {

    get name(): string {
        return 'center';
    }

    get hex(): string {
        return '#ff0000';
    }
}