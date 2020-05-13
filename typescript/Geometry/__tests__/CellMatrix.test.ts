import serializer from '../../../jest-serialize-conway';
import {Position} from '@Conway/Geometry/Position';
import {Matrix} from '@Conway/Geometry/Matrix';

describe('CellMatrix', () => {

    let matrix = new Matrix();

    beforeAll(() => {
        expect.addSnapshotSerializer(serializer);
    });

    beforeEach(() => {
        matrix = new Matrix();
    });

    test('can be created', () => {

        expect(matrix).toBeInstanceOf(Matrix);

    });

    test('can add a cell', () => {

        const position = new Position(0, 0);

        expect(matrix.has(position)).toBeFalsy();

        matrix.add(position);

        expect(matrix.has(position)).toBeTruthy();

    });

    test('can not add a cell twice to same position', () => {

        const position = new Position(0,   0);

        matrix.add(position);

        expect(matrix.all().length).toBe(1);

        matrix.add(position);

        expect(matrix.all().length).toBe(1);

    });

    test('can be removed', () => {

        const position = new Position(0,   0);

        matrix.add(position);

        expect(matrix.has(position)).toBeTruthy();

        matrix.remove(position);

        expect(matrix.has(position)).toBeFalsy();

    });

    test('can not be removed when not existing', () => {

        const position = new Position(0,   0);

        expect(matrix.has(position)).toBeFalsy();

        matrix.remove(position);

        expect(matrix.has(position)).toBeFalsy();

    });

    test('can get all', () => {

        const position = new Position(0, 0);

        matrix.add(position);

        expect(matrix.all().length).toBe(1);

    });

    test('can get height', () => {

        matrix.add(new Position(0, 1));
        matrix.add(new Position(0, 10));

        expect(matrix.height()).toBe(10);

    });

    test('can get height', () => {

        matrix.add(new Position(0, -5));
        matrix.add(new Position(0, 5));

        expect(matrix.height()).toBe(10);

    });

    test('can get height', () => {

        matrix.add(new Position(0, -10));
        matrix.add(new Position(0, -1));

        expect(matrix.height()).toBe(10);

    });

    test('can get width', () => {

        matrix.add(new Position(1, 0));
        matrix.add(new Position(10, 0));

        expect(matrix.width()).toBe(10);

    });

    test('can get width', () => {

        matrix.add(new Position(-5, 0));
        matrix.add(new Position(5, 0));

        expect(matrix.width()).toBe(10);

    });

    test('can get width', () => {

        matrix.add(new Position(-10, 0));
        matrix.add(new Position(-1, 0));

        expect(matrix.width()).toBe(10);

    });

});
