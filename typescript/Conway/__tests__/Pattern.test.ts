import {Pattern} from '../Pattern';
import {Position} from '../Position';
import {CellMatrix} from '../CellMatrix';
import serializer from '../../../jest-serialize-conway';

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

});
