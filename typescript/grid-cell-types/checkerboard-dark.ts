import { GridCellType } from './grid-cell-type';

export default class CheckerboardDark implements GridCellType {
 
    get name():string{
        return 'checkerboard-dark'
    }

    get hex(): string {
        return '#D46A6A';
    }
}