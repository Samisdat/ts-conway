import {Position} from '../position';
import {Habitat} from '../Habitat';
import {Patterns} from '../patterns';

import serializer from '../../../jest-serialize-conway';
import {CellMatrix} from '../CellMatrix';
import {Cell} from '../cell';

describe('Habitat', () => {

    let cellMatrix: CellMatrix;

    beforeEach(function () {

        expect.addSnapshotSerializer(serializer);

        cellMatrix = new CellMatrix();

    });

    test('can be created', () => {

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat).toBeInstanceOf(Habitat);

    });

    test('seed a cell', () => {

        cellMatrix.seed(
            new Position(0, 1)
        );

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        let cells = habitat.getAllCells();
        expect(cells.length).toBe(1);
        expect(cells[0].x).toBe(0);
        expect(cells[0].y).toBe(1);

    });

    test('a not existing cell is not alive', () => {

        cellMatrix.seed(
            new Position(0, 1)
        );

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat.getAllCells().length).toBe(1);

        habitat.elapse();

        expect(habitat.getAllCells().length).toBe(0);

    });


    test('snapshot', () => {

        const patterns = new Patterns();
        cellMatrix.seedPattern(patterns.get('blinker'));

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat).toMatchSnapshot('blinker-start');

        habitat.elapse();

        expect(habitat).toMatchSnapshot('blinker-next');

        habitat.elapse();

        expect(habitat).toMatchSnapshot('blinker-start');
    });

    test('elapse with one cell', () => {

        cellMatrix.seed(
            new Position(0, 1)
        );

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat.get()).toStrictEqual([new Position(0, 1)]);

    });

    test('elapse with a blinker', () => {

        cellMatrix.seed(
            new Position(0, 0)
        );
        cellMatrix.seed(
            new Position(0, 1)
        );
        cellMatrix.seed(
            new Position(0, 2)
        );

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat.get()).toStrictEqual([
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 2)
        ]);

        habitat.elapse();

        expect(habitat.get()).toStrictEqual([
            new Position(0, 1),
            new Position(-1, 1),
            new Position(1, 1)
        ]);

        // check garbage collection
        expect(habitat.getAllCells().length).toBe(3);


        habitat.elapse();

        expect(habitat.get()).toStrictEqual([
            new Position(0, 1),
            new Position(0, 0),
            new Position(0, 2)
        ]);

        expect(habitat.getAllCells().length).toBe(3);

    });

});

jest.useFakeTimers();

describe('Habitat aging with interval', function() {

    let habitat: Habitat;

    beforeEach(() => {

        const patterns = new Patterns();

        const cellMatrix = new CellMatrix();

        cellMatrix.seedPattern(patterns.get('blinker'));

        habitat = new Habitat(
            cellMatrix,
            50
        );

    });


    it('should increase position', function() {

        expect(habitat.get()).toStrictEqual([
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0)
        ]);

        habitat.startAging();

        jest.advanceTimersByTime(51);

        expect(habitat.get()).toStrictEqual([
            new Position(0, 0),
            new Position(0, -1),
            new Position(0, 1)
        ]);

    });

});
