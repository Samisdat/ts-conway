import {CellMatrix} from '../CellMatrix';
import {LivingCell} from '../livingcell';
import {Position} from '../position';

describe('CellMatrix', () => {

    test('can be created', () => {

        const cellMatrix = new CellMatrix();

    });

    test('can be added', () => {

        const cellMatrix = new CellMatrix();

        const position = new Position(0, 0);

        const livingCell = new LivingCell(
            position
        );

        expect(cellMatrix.get(position)).toBeUndefined();

        cellMatrix.add(livingCell);

        expect(cellMatrix.get(position)).toBe(livingCell);


    });

    test('can be removed', () => {

        const cellMatrix = new CellMatrix();

        const position = new Position(0, 0);

        const livingCell = new LivingCell(
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

        const livingCell = new LivingCell(
            position
        );

        cellMatrix.add(livingCell);

        expect(cellMatrix.all().length).toBe(1);



    });


});
