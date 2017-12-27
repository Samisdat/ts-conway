import { GridCellType } from './grid-cell-type';

export default class CheckerboardLight implements GridCellType {
 
    get name():string{
        return 'checkerboard-light'
    }

    get hex(): string {
        return '#FFAAAA';
    }
}