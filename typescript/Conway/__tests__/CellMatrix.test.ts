import {CellMatrix} from '../CellMatrix';
import {Position} from '../position';
import {Cell} from '../cell';
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

        const livingCell = new Cell(
            position
        );

        expect(cellMatrix.get(position)).toBeUndefined();

        cellMatrix.add(livingCell);

        expect(cellMatrix.get(position)).toBe(livingCell);

    });

    test('get tell if having a cell at position', () => {

        const position = new Position(0, 0);

        expect(cellMatrix.has(position)).toBeFalsy();

        cellMatrix.seed(position);

        expect(cellMatrix.has(position)).toBeTruthy();

    });

    test('can seed at position', () => {

        const position = new Position(0, 0);

        expect(cellMatrix.get(position)).toBeUndefined();

        cellMatrix.seed(position);

        const livingCell = new Cell(
            position
        );

        expect(cellMatrix.get(position)).toStrictEqual(livingCell);

    });

    test('can not add a cell twice to same position', () => {

        const position = new Position(0,   0);

        cellMatrix.seed(position);

        const cell = new Cell(
            position
        );

        expect(cellMatrix.all().length).toBe(1);

        cellMatrix.add(cell);

        expect(cellMatrix.all().length).toBe(1);

    });

    test('can be removed', () => {

        const position = new Position(0,   0);

        cellMatrix.seed(position);

        expect(cellMatrix.get(position)).toBeInstanceOf(Cell);;

        cellMatrix.remove(position);

        expect(cellMatrix.get(position)).toBeUndefined();

    });

    test('can not be removed when not existing', () => {

        const position = new Position(0,   0);

        expect(cellMatrix.get(position)).toBeUndefined();;

        cellMatrix.remove(position);

        expect(cellMatrix.get(position)).toBeUndefined();

    });

    test('can get all', () => {

        const cellMatrix = new CellMatrix();

        const position = new Position(0, 0);

        const livingCell = new Cell(
            position
        );

        cellMatrix.add(livingCell);

        expect(cellMatrix.all().length).toBe(1);

    });

    test('seed a pattern', () => {

        const patterns = new Patterns();
        cellMatrix.seedPattern(patterns.get('blinker'));

        expect(cellMatrix.all().map((cell: Cell) =>{
            return cell.position;
        })).toStrictEqual([
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

        expect(cellMatrix.all().map((cell: Cell) =>{
            return cell.position;
        })).toStrictEqual([
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

    });


});
