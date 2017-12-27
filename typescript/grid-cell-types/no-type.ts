import { GridCellType } from './grid-cell-type';

export default class NoType implements GridCellType {

    get name(): string {
        return 'none';
    }

    get hex(): string {
        return undefined;
    }
}