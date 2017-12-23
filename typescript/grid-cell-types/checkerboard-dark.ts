import { GridCellType } from './grid-cell-type';

export default class CheckerboardDark implements GridCellType {
    public toHex(): string {
        return '#D46A6A';
    }
}