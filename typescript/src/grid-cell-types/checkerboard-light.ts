import { GridCellType } from './grid-cell-type';

export default class CheckerboardLight implements GridCellType {
    public toHex():string{
        return '#FFAAAA';
    }
}