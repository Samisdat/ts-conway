import serializer from '../../../jest-serialize-conway';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Position} from '@Conway/Conway/Position';
import {Pattern} from '@Conway/Conway/Pattern';
import {Patterns} from '@Conway/Conway/Patterns';


describe('Pattern', () => {

    beforeEach(function () {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created', () => {

        const cellMatrix = new CellMatrix();
        cellMatrix.add(
            new Position(-1, -1)
        );

        let pattern = new Pattern(
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

        let pattern = new Pattern(
            'Scottish',
            cellMatrix
        );

        expect(pattern.getWidth()).toBe(3);
        expect(pattern.getHeight()).toBe(4);

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

        let pattern = new Pattern(
            'Scottish',
            cellMatrix
        );

        expect(pattern.getWidth()).toBe(1);
        expect(pattern.getHeight()).toBe(3);

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

        let pattern = new Pattern(
            'Scottish',
            cellMatrix
        );

        expect(pattern.getWidth()).toBe(3);
        expect(pattern.getHeight()).toBe(1);

        expect(pattern.getMatrix()).toMatchSnapshot();

        pattern.mirrorVertical();

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('toArray', () => {

        const patterns = new Patterns();

        const pattern = patterns.get('rotate');
        expect(pattern.toArray()).toMatchSnapshot();

        console.log(pattern.toArray())

    });

    test('toString', () => {

        const patterns = new Patterns();

        const pattern = patterns.get('rotate');
        expect(pattern.toString()).toMatchSnapshot();

        console.log(pattern.toString())

    });

    test('fromString', () => {

        const patternStr = '!Name: Rotat\n' +
            'O..\n' +
            'OOO';

        const pattern = Pattern.fromString(patternStr);

        expect(pattern).toBeInstanceOf(Pattern);

        expect(pattern.toString()).toBe(patternStr);


    });


});
