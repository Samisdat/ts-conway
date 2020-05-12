import {Position} from '@Conway/Geometry/Position';
import {GridCreator} from '@Conway/Frontend/Grid/GridCreator';

describe('GridCreator', () => {

    test('can be created', () => {

        const gridCreator = new GridCreator(
            200,
            200,
            100,
            new Position(0, 0),
            1
        );

        expect(gridCreator).toBeInstanceOf(GridCreator);

    });

    test('absolute position and offset can be retrieved for integer pan', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(1, 3),
            1
        );

        expect(gridCreator.getPan()).toStrictEqual(new Position(1, 3));
        expect(gridCreator.getSourcePosition()).toStrictEqual(new Position(1, 3));
        expect(gridCreator.getOffset()).toStrictEqual(new Position(0, 0));

    });

    test('absolute position and offset can be retrieved for 0.5/0.5 pan', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0.5, 0.5),
            1
        );

        expect(gridCreator.getPan()).toStrictEqual(new Position(0.5, 0.5));
        expect(gridCreator.getSourcePosition()).toStrictEqual(new Position(0, 0));
        expect(gridCreator.getOffset()).toStrictEqual(new Position(-0.5, -0.5));

    });

    test('absolute position and offset can be retrieved for 4.8/-3.3 pan', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(4.8, -3.3),
            1
        );

        expect(gridCreator.getPan()).toStrictEqual(new Position(4.8, -3.3));
        expect(gridCreator.getSourcePosition()).toStrictEqual(new Position(4, -3));
        expect(gridCreator.getOffset().x).toBeCloseTo(-0.8, 0.0001);
        expect(gridCreator.getOffset().y).toBeCloseTo(0.3, 0.0001);

    });

    test('an easy case', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0, 0),
            1
        );

        expect(gridCreator.getRows()).toBe(1);
        expect(gridCreator.getCols()).toBe(1);
        expect(gridCreator.getPan()).toStrictEqual(new Position(0, 0));
        expect(gridCreator.getZoom()).toBe(1);

    });

    test('in the middle one cell and left and right one cutted cell', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            75,
            new Position(0, 0),
            1
        );

        expect(gridCreator.getRows()).toBe(3);
        expect(gridCreator.getCols()).toBe(3);
        expect(gridCreator.getPan()).toStrictEqual(new Position(0, 0));
        expect(gridCreator.getZoom()).toBe(1);

    });

    test('zoom a little', () => {

        const gridCreator = new GridCreator(
            150,
            150,
            100,
            new Position(0, 0),
            0.5
        );

        expect(gridCreator.getRows()).toBe(3);
        expect(gridCreator.getCols()).toBe(3);
        expect(gridCreator.getPan()).toStrictEqual(new Position(0, 0));
        expect(gridCreator.getZoom()).toBe(0.5);

    });

    test('move a little to the left', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(-0.5, 0),
            1
        );

        expect(gridCreator.getRows()).toBe(3);
        expect(gridCreator.getCols()).toBe(1);
        expect(gridCreator.getPan()).toStrictEqual(new Position(-0.5, 0));
        expect(gridCreator.getZoom()).toBe(1);

    });

    test('move a little to the right', () => {

        const gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0.5, 0),
            1
        );

        expect(gridCreator.getRows()).toBe(3);
        expect(gridCreator.getCols()).toBe(1);
        expect(gridCreator.getPan()).toStrictEqual(new Position(0.5, 0));
        expect(gridCreator.getZoom()).toBe(1);

    });

});
