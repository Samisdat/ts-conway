import { GridCellType } from './grid-cell-type';

export default class Center implements GridCellType {
 
    get name():string{
        return 'center'
    }

    get hex(): string {
        return '#ff0000';
    }
}