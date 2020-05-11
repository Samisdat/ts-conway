import serializer from '../../../jest-serialize-conway';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Position} from '@Conway/Conway/Position';
import {Pattern} from '@Conway/Conway/Pattern';
import {scholar} from '@Conway/Patterns/scholar.cells';
import {glider} from '@Conway/Patterns/glider.cells';

describe('Pattern', () => {

    beforeEach(function () {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created', () => {

        const cellMatrix = new CellMatrix();

        const pattern = new Pattern(
            'Scottish',
            cellMatrix
        );

        expect(pattern).toBeInstanceOf(Pattern);

    });

    test('get width and height', () => {

        const cellMatrix = new CellMatrix();
        cellMatrix.add(
            new Position(-1, -1)
        );
        cellMatrix.add(
            new Position(1, 2)
        );

        const pattern = new Pattern(
            'Scottish',
            cellMatrix
        );

        expect(pattern.getWidth()).toBe(2);
        expect(pattern.getHeight()).toBe(3);

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('mirrorHorizontal simple', () => {

        const cellMatrix = new CellMatrix();
        cellMatrix.add(
            new Position(-1, 1)
        );
        cellMatrix.add(
            new Position(-1, 0)
        );
        cellMatrix.add(
            new Position(-1, -1)
        );

        const pattern = new Pattern(
            'Scottish',
            cellMatrix
        );

        expect(pattern.getWidth()).toBe(1);
        expect(pattern.getHeight()).toBe(2);

        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.mirrorHorizontal();

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('mirrorVertical simple', () => {

        const cellMatrix = new CellMatrix();
        cellMatrix.add(
            new Position(-1, 1)
        );
        cellMatrix.add(
            new Position(0, 1)
        );
        cellMatrix.add(
            new Position(1, 1)
        );

        const pattern = new Pattern(
            'Scottish',
            cellMatrix
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

        console.log(pattern.toString())

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
