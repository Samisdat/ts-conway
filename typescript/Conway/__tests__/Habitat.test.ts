import serializer from '../../../jest-serialize-conway';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Habitat} from '@Conway/Conway/Habitat';
import {Position} from '@Conway/Conway/Position';

import {blinker} from '@Conway/Patterns/blinker.cells';
import {Pattern} from '@Conway/Conway/Pattern';


describe('Habitat', () => {

    let cellMatrix: CellMatrix;

    beforeEach(function () {

        expect.addSnapshotSerializer(serializer);

        cellMatrix = new CellMatrix();

    });

    test('can be created', () => {

        const habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat).toBeInstanceOf(Habitat);

    });

    test('a not existing cell is not alive', () => {

        cellMatrix.add(
            new Position(0, 1)
        );

        const habitat = new Habitat(
            cellMatrix,
            1000
        );

        expect(habitat.getAllCells().length).toBe(1);

        habitat.elapse();

        expect(habitat.getAllCells().length).toBe(0);

    });


    test('snapshot', () => {

        cellMatrix.seedPattern(
            Pattern.fromString(blinker)
        );

        const habitat = new Habitat(
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

        const habitat = new Habitat(
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

        const habitat = new Habitat(
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

        const cellMatrix = new CellMatrix();

        cellMatrix.seedPattern(
            Pattern.fromString(blinker)
        );

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
