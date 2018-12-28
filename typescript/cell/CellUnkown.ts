import { GridCellType } from './grid-cell-type';

export default class CellUnkown implements GridCellType {

    get name(): string {
        return 'none';
    }

    get hex(): string {
        return undefined;
    }
}