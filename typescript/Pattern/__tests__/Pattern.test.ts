import serializer from '../../../jest-serialize-conway';
import {Position} from '@Conway/Geometry/Position';
import {Pattern} from '@Conway/Pattern/Pattern';
import {glider} from '@Conway/Pattern/Store/glider.cells';
import {scholar} from '@Conway/Pattern/Store/scholar.cells';
import {Matrix} from '@Conway/Geometry/Matrix';
import {patternToString} from '@Conway/Pattern/patternToString';

describe('Pattern', () => {

    beforeEach(function () {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created', () => {

        const matrix = new Matrix();

        const pattern = new Pattern(
            'Scottish',
            matrix
        );

        expect(pattern).toBeInstanceOf(Pattern);
        expect(pattern.getName()).toBe('Scottish');

    });

    test('get width and height', () => {

        const matrix = new Matrix();
        matrix.add(
            new Position(-1, -1)
        );
        matrix.add(
            new Position(1, 2)
        );

        const pattern = new Pattern(
            'Scottish',
            matrix
        );

        expect(pattern.getWidth()).toBe(2);
        expect(pattern.getHeight()).toBe(3);

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('mirrorHorizontal simple', () => {

        const matrix = new Matrix();
        matrix.add(
            new Position(-1, 1)
        );
        matrix.add(
            new Position(-1, 0)
        );
        matrix.add(
            new Position(-1, -1)
        );

        const pattern = new Pattern(
            'Scottish',
            matrix
        );

        expect(pattern.getWidth()).toBe(1);
        expect(pattern.getHeight()).toBe(2);

        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.mirrorHorizontal();

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('mirrorVertical simple', () => {

        const matrix = new Matrix();
        matrix.add(
            new Position(-1, 1)
        );
        matrix.add(
            new Position(0, 1)
        );
        matrix.add(
            new Position(1, 1)
        );

        const pattern = new Pattern(
            'Scottish',
            matrix
        );

        expect(pattern.getWidth()).toBe(2);
        expect(pattern.getHeight()).toBe(1);

        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.mirrorVertical();

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('rotate', () => {

        const patternStr = '!Name: Rotate\n' +
            'O..\n' +
            'OOO';

        const pattern = Pattern.fromString(patternStr);
        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.rotate();
        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.rotate();
        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.rotate();
        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.rotate();
        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('toArray', () => {

        const pattern = Pattern.fromString(glider)
        expect(pattern.toArray()).toMatchSnapshot();

    });

    test('toString', () => {

        const pattern = Pattern.fromString(glider)

        console.log(glider)
        console.log(patternToString(pattern))

        expect(pattern.toString()).toMatchSnapshot();

    });

    test('fromString("a string").toString should be "a string"', () => {

        const patternStr = '!Name: Rotat\n' +
            'O..\n' +
            'OOO';

        const pattern = Pattern.fromString(patternStr);

    });

    test('read and rotate scholar', () => {

        const pattern = Pattern.fromString(scholar);

    });

});
