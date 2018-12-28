import { CellTypeInterface } from './CellTypeInterface';

export class CellTypesCenter implements CellTypeInterface {

    get name(): string {
        return 'center';
    }

    get hex(): string {
        return '#ff0000';
    }
}