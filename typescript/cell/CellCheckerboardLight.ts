import { GridCellType } from './grid-cell-type';

export default class CellCheckerboardLight implements GridCellType {

    get name(): string {
        return 'checkerboard-light';
    }

    get hex(): string {
        return '#FFAAAA';
    }
}