import {Position} from '../Position';
import {Habitat} from '../Habitat';
import {Patterns} from '../Patterns';

import serializer from '../../../jest-serialize-conway';
import {CellMatrix} from '../CellMatrix';

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

    test('a not existing cell is not alive', () => {

        cellMatrix.add(
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

        expect(habitat.getMatrix()).toMatchSnapshot();

        habitat.elapse();

        expect(habitat.getMatrix()).toMatchSnapshot();

        habitat.elapse();

        expect(habitat.getMatrix()).toMatchSnapshot();
    });

    test('elapse with one cell', () => {

        cellMatrix.add(
            new Position(0, 1)
        );

        let habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat.get()).toStrictEqual([new Position(0, 1)]);

    });

    test('elapse with a blinker', () => {

        cellMatrix.add(
            new Position(0, 0)
        );
        cellMatrix.add(
            new Position(0, 1)
        );
        cellMatrix.add(
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


    test('should increase position', function() {

        expect(habitat.getMatrix()).toMatchSnapshot();

        habitat.startAging();

        jest.advanceTimersByTime(51);

        expect(habitat.getMatrix()).toMatchSnapshot();

    });

});
