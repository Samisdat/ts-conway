import {CellMatrix} from '../CellMatrix';
import {Position} from '../position';
import {Cell} from '../cell';

describe('CellMatrix', () => {

    test('can be created', () => {

        const cellMatrix = new CellMatrix();

    });

    test('can be added', () => {

        const cellMatrix = new CellMatrix();

        const position = new Position(0, 0);

        const livingCell = new Cell(
            position
        );

        expect(cellMatrix.get(position)).toBeUndefined();

        cellMatrix.add(livingCell);

        expect(cellMatrix.get(position)).toBe(livingCell);


    });

    test('can be removed', () => {

        const cellMatrix = new CellMatrix();

        const position = new Position(0, 0);

        const livingCell = new Cell(
            position
        );

        cellMatrix.add(livingCell);

        expect(cellMatrix.get(position)).toBe(livingCell);

        cellMatrix.remove(livingCell);

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


});
