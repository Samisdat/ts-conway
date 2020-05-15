import serializer from '../../../jest-serialize-conway';
import {Position} from '@Conway/Geometry/Position';
import {Matrix} from '@Conway/Geometry/Matrix';
import {matrixToString} from '@Conway/Geometry/matrixToString';

describe('matrixToString', () => {

    let matrix = new Matrix();

    beforeAll(() => {

    });

    beforeEach(() => {
        matrix = new Matrix();
    });

    test('empty Matrix to string', () => {

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

    test('Matrix from -5 to 5 in both dimensions to string', () => {

        matrix.add(new Position(-5, -6));
        matrix.add(new Position(-5, 5));
        matrix.add(new Position(5, 0));

        //console.log(matrixToString(matrix))

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

    test('Matrix with a nice pattern to string', () => {

        matrix.add(new Position(-1, -1));
        matrix.add(new Position(-2, 0));
        matrix.add(new Position(-1, 1));
        matrix.add(new Position(0, 2));
        matrix.add(new Position(1, 1));
        matrix.add(new Position(2, 0));
        matrix.add(new Position(2, -1));
        matrix.add(new Position(2, -2));

        //console.log(matrixToString(matrix))

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

    test('Matrix diagonal line', () => {

        matrix.add(new Position(-6, -7));
        matrix.add(new Position(-6, -6));
        matrix.add(new Position(-5, -5));
        matrix.add(new Position(-4, -4));
        matrix.add(new Position(-3, -3));
        matrix.add(new Position(-2, -2));
        matrix.add(new Position(-1, -1));
        matrix.add(new Position(0, 0));
        matrix.add(new Position(1, 1));
        matrix.add(new Position(2, 2));
        matrix.add(new Position(3, 3));
        matrix.add(new Position(4, 4));
        matrix.add(new Position(5, 5));
        matrix.add(new Position(6, 6));

        //console.log(matrixToString(matrix, true))

        expect(matrixToString(matrix, true)).toMatchSnapshot();

    });

    test('Matrix diagonal line without scale', () => {

        matrix.add(new Position(-6, -7));
        matrix.add(new Position(-6, -6));
        matrix.add(new Position(-5, -5));
        matrix.add(new Position(-4, -4));
        matrix.add(new Position(-3, -3));
        matrix.add(new Position(-2, -2));
        matrix.add(new Position(-1, -1));
        matrix.add(new Position(0, 0));
        matrix.add(new Position(1, 1));
        matrix.add(new Position(2, 2));
        matrix.add(new Position(3, 3));
        matrix.add(new Position(4, 4));
        matrix.add(new Position(5, 5));
        matrix.add(new Position(6, 6));

        //console.log(matrixToString(matrix, false))

        expect(matrixToString(matrix, false)).toMatchSnapshot();

    });

    test('Matrix from -5 to 5 in both dimensions to string', () => {

        matrix.add(new Position(5, 5));
        matrix.add(new Position(4, 4));

        //console.log(matrixToString(matrix))

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

    test('Matrix from -5 to 5 in both dimensions to string', () => {

        matrix.add(new Position(-1, -1));
        matrix.add(new Position(1, 1));

        //console.log(matrixToString(matrix))

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

    test('Matrix from -5 to 5 in both dimensions to string', () => {

        matrix.add(new Position(1, 1));
        matrix.add(new Position(4, 4));

        //console.log(matrixToString(matrix))

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

    test('Matrix from -5 to 5 in both dimensions to string', () => {

        matrix.add(new Position(-4, -4));
        matrix.add(new Position(-1, -1));

        //console.log(matrixToString(matrix))

        expect(matrixToString(matrix)).toMatchSnapshot();

    });

});
