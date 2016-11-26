import { GridCellType } from './grid-cell-type';

export default class LivingCell implements GridCellType {
    public toHex():string{
        return '#000000';
    }
}