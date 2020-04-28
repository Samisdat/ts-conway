import {CellMatrix} from '../CellMatrix';
import {Position} from '../position';
import {Patterns} from '../patterns';

describe('CellMatrix', () => {

    let cellMatrix = new CellMatrix();

    beforeEach(() => {
        cellMatrix = new CellMatrix();
    });

    test('can be created', () => {

        expect(cellMatrix).toBeInstanceOf(CellMatrix);

    });

    test('can add a cell', () => {

        const position = new Position(0, 0);

        expect(cellMatrix.has(position)).toBeFalsy();

        cellMatrix.add(position);

        expect(cellMatrix.has(position)).toBeTruthy();

    });

    test('can not add a cell twice to same position', () => {

        const position = new Position(0,   0);

        cellMatrix.add(position);

        expect(cellMatrix.all().length).toBe(1);

        cellMatrix.add(position);

        expect(cellMatrix.all().length).toBe(1);

    });

    test('can be removed', () => {

        const position = new Position(0,   0);

        cellMatrix.add(position);

        expect(cellMatrix.has(position)).toBeTruthy();

        cellMatrix.remove(position);

        expect(cellMatrix.has(position)).toBeFalsy();

    });

    test('can not be removed when not existing', () => {

        const position = new Position(0,   0);

        expect(cellMatrix.has(position)).toBeFalsy();

        cellMatrix.remove(position);

        expect(cellMatrix.has(position)).toBeFalsy();

    });

    test('can get all', () => {

        const cellMatrix = new CellMatrix();

        const position = new Position(0, 0);

        cellMatrix.add(position);

        expect(cellMatrix.all().length).toBe(1);

    });

    test('seed a pattern', () => {

        const patterns = new Patterns();
        cellMatrix.seedPattern(patterns.get('blinker'));

        expect(cellMatrix.all()).toStrictEqual([
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0)
        ]);

    });

    test('seed a moved pattern', () => {

        const patterns = new Patterns();
        cellMatrix.seedPattern(
            patterns.get('blinker'),
            new Position(0, 1)
        );

        expect(cellMatrix.all()).toStrictEqual([
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

    });


});
