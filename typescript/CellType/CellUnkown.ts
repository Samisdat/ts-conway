import { CellTypeInterface } from './CellTypeInterface';

export class CellUnkown implements CellTypeInterface {

    get name(): string {
        return 'none';
    }

    get hex(): string {
        return undefined;
    }
}