import { CellTypeInterface } from './CellTypeInterface';

export class CellTypeLiving implements CellTypeInterface {

    get name(): string {
        return 'living';
    }

    get hex(): string {
        return '#000000';
    }
}