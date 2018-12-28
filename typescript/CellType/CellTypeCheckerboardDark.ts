import { CellTypeInterface } from './CellTypeInterface';

export class CellTypeCheckerboardDark implements CellTypeInterface {

    get name(): string {
        return 'checkerboard-dark';
    }

    get hex(): string {
        return '#D46A6A';
    }
}