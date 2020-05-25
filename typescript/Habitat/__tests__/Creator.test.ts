import {Position} from '@Conway/Geometry/Position';
import {Creator} from '@Conway/Habitat/Creator';

describe('creator', () => {

    test('can be created', () => {

        const creator = new Creator(
            200,
            200,
            100,
            new Position(0, 0),
            1
        );

        expect(creator).toBeInstanceOf(Creator);

    });

    test('absolute position and offset can be retrieved for integer pan', () => {

        const creator = new Creator(
            100,
            100,
            100,
            new Position(1, 3),
            1
        );

        expect(creator.getPan()).toStrictEqual(new Position(1, 3));
        expect(creator.getSourcePosition()).toStrictEqual(new Position(1, 3));
        expect(creator.getOffset()).toStrictEqual(new Position(0, 0));

    });

    test('absolute position and offset can be retrieved for 0.5/0.5 pan', () => {

        const creator = new Creator(
            100,
            100,
            100,
            new Position(0.5, 0.5),
            1
        );

        expect(creator.getPan()).toStrictEqual(new Position(0.5, 0.5));
        expect(creator.getSourcePosition()).toStrictEqual(new Position(0, 0));
        expect(creator.getOffset()).toStrictEqual(new Position(-0.5, -0.5));

    });

    test('absolute position and offset can be retrieved for 4.8/-3.3 pan', () => {

        const creator = new Creator(
            100,
            100,
            100,
            new Position(4.8, -3.3),
            1
        );

        expect(creator.getPan()).toStrictEqual(new Position(4.8, -3.3));
        expect(creator.getSourcePosition()).toStrictEqual(new Position(4, -3));
        expect(creator.getOffset().x).toBeCloseTo(-0.8, 0.0001);
        expect(creator.getOffset().y).toBeCloseTo(0.3, 0.0001);

    });

    test('an easy case', () => {

        const creator = new Creator(
            100,
            100,
            100,
            new Position(0, 0),
            1
        );

        expect(creator.getRows()).toBe(1);
        expect(creator.getCols()).toBe(1);
        expect(creator.getPan()).toStrictEqual(new Position(0, 0));
        expect(creator.getZoom()).toBe(1);

    });

    test('in the middle one cell and left and right one cutted cell', () => {

        const creator = new Creator(
            100,
            100,
            75,
            new Position(0, 0),
            1
        );

        expect(creator.getRows()).toBe(3);
        expect(creator.getCols()).toBe(3);
        expect(creator.getPan()).toStrictEqual(new Position(0, 0));
        expect(creator.getZoom()).toBe(1);

    });

    test('zoom a little', () => {

        const creator = new Creator(
            150,
            150,
            100,
            new Position(0, 0),
            0.5
        );

        expect(creator.getRows()).toBe(3);
        expect(creator.getCols()).toBe(3);
        expect(creator.getPan()).toStrictEqual(new Position(0, 0));
        expect(creator.getZoom()).toBe(0.5);

    });

    test('move a little to the left', () => {

        const creator = new Creator(
            100,
            100,
            100,
            new Position(-0.5, 0),
            1
        );

        expect(creator.getRows()).toBe(3);
        expect(creator.getCols()).toBe(1);
        expect(creator.getPan()).toStrictEqual(new Position(-0.5, 0));
        expect(creator.getZoom()).toBe(1);

    });

    test('move a little to the right', () => {

        const creator = new Creator(
            100,
            100,
            100,
            new Position(0.5, 0),
            1
        );

        expect(creator.getRows()).toBe(3);
        expect(creator.getCols()).toBe(1);
        expect(creator.getPan()).toStrictEqual(new Position(0.5, 0));
        expect(creator.getZoom()).toBe(1);

    });

});
