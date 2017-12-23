import { GridCellType } from './grid-cell-type';

export default class NoType implements GridCellType {
    public toHex(): string {
        return undefined;
    }
}