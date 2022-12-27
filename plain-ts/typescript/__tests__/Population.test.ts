import serializer from '../../jest-serialize-conway';
import {Population} from '../Population';
import {Position} from '@Conway/Geometry/Position';
import {blinker} from '@Conway/Pattern/Store/blinker.cells';
import {Pattern} from '@Conway/Pattern/Pattern';
import {seedPattern} from '@Conway/Pattern/seedPattern';
import {Matrix} from '@Conway/Geometry/Matrix';

describe('Habitat', () => {

    let matrix: Matrix;

    beforeEach(function () {

        expect.addSnapshotSerializer(serializer);

        matrix = new Matrix();

    });

    test('can be created', () => {

        const population = new Population(
            matrix,
            1000
        );

        expect(population).toBeInstanceOf(Population);

    });

    test('a not existing cell is not alive', () => {

        matrix.add(
            new Position(0, 1)
        );

        const population = new Population(
            matrix,
            1000
        );

        expect(population.getAllCells().length).toBe(1);

        population.elapse();

        expect(population.getAllCells().length).toBe(0);

    });


    test('snapshot', () => {

        seedPattern(
            matrix,
            Pattern.fromString(blinker)
        );

        const population = new Population(
            matrix,
            1000
        );

        expect(population.getMatrix()).toMatchSnapshot();

        population.elapse();

        expect(population.getMatrix()).toMatchSnapshot();

        population.elapse();

        expect(population.getMatrix()).toMatchSnapshot();
    });

    test('elapse with one cell', () => {

        matrix.add(
            new Position(0, 1)
        );

        const population = new Population(
            matrix,
            1000
        );

        expect(population.get()).toStrictEqual([new Position(0, 1)]);

    });

    test('elapse with a blinker', () => {

        matrix.add(
            new Position(0, 0)
        );
        matrix.add(
            new Position(0, 1)
        );
        matrix.add(
            new Position(0, 2)
        );

        const population = new Population(
            matrix,
            1000
        );

        expect(population.get()).toStrictEqual([
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 2)
        ]);

        population.elapse();

        expect(population.get()).toStrictEqual([
            new Position(0, 1),
            new Position(-1, 1),
            new Position(1, 1)
        ]);

        // check garbage collection
        expect(population.getAllCells().length).toBe(3);


        population.elapse();

        expect(population.get()).toStrictEqual([
            new Position(0, 1),
            new Position(0, 0),
            new Position(0, 2)
        ]);

        expect(population.getAllCells().length).toBe(3);

    });

});

jest.useFakeTimers();

describe('Habitat aging with interval', function() {

    let population: Population;

    beforeEach(() => {

        const matrix = new Matrix();

        seedPattern(
            matrix,
            Pattern.fromString(blinker)
        );

        population = new Population(
            matrix,
            50
        );

    });

    test('should increase position', function() {

        expect(population.getMatrix()).toMatchSnapshot();

        population.startAging();

        jest.advanceTimersByTime(51);

        expect(population.getMatrix()).toMatchSnapshot();

    });

});
