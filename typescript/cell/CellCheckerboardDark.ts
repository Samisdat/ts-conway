import { GridCellType } from './grid-cell-type';

export default class CellCheckerboardDark implements GridCellType {

    get name(): string {
        return 'checkerboard-dark';
    }

    get hex(): string {
        return '#D46A6A';
    }
}