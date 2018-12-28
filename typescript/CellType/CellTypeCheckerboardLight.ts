import { CellTypeInterface } from './CellTypeInterface';

export class CellTypeCheckerboardLight implements CellTypeInterface {

    get name(): string {
        return 'checkerboard-light';
    }

    get hex(): string {
        return '#FFAAAA';
    }
}