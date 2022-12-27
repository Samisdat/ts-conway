import {Position} from '@Conway/Geometry/Position';
import {Boundposition} from '@Conway/Geometry/Boundposition';

describe('PositionBound', () => {

    test('can be created', () => {

        const boundposition = new Boundposition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(boundposition).toBeInstanceOf(Boundposition);

    });

    test('create fails when right is not right from left ', () => {

        const createBound = function () {
            new Boundposition(
                new Position(2, 0),
                new Position(-2, 0)
            );
        };

        expect(createBound).toThrowErrorMatchingSnapshot();

    });

    test('create fails when bottom is not below from top', () => {

        const createBound = function () {
            new Boundposition(
                new Position(1, 2),
                new Position(2, 1)
            );
        };

        expect(createBound).toThrowErrorMatchingSnapshot();

    });

    test('within', () => {

        const boundposition = new Boundposition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(boundposition.isWithin(new Position(-3, -3))).toBeFalsy();
        expect(boundposition.isWithin(new Position(-2, -3))).toBeFalsy();
        expect(boundposition.isWithin(new Position(-3, -2))).toBeFalsy();

        expect(boundposition.isWithin(new Position(-2, -2))).toBeTruthy();
        expect(boundposition.isWithin(new Position(-1, -1))).toBeTruthy();
        expect(boundposition.isWithin(new Position(0, 0))).toBeTruthy();
        expect(boundposition.isWithin(new Position(1, 1))).toBeTruthy();
        expect(boundposition.isWithin(new Position(2, 2))).toBeTruthy();

        expect(boundposition.isWithin(new Position(3, 2))).toBeFalsy();
        expect(boundposition.isWithin(new Position(2, 3))).toBeFalsy();
        expect(boundposition.isWithin(new Position(3, 3))).toBeFalsy();

    });

    test('confine', () => {

        const boundposition = new Boundposition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(boundposition.confine(new Position(-3, -3))).toStrictEqual(new Position(-2, -2));
        expect(boundposition.confine(new Position(-2, -3))).toStrictEqual(new Position(-2, -2));
        expect(boundposition.confine(new Position(-3, -2))).toStrictEqual(new Position(-2, -2));

        expect(boundposition.confine(new Position(-2, -2))).toStrictEqual(new Position(-2, -2));
        expect(boundposition.confine(new Position(-1, -1))).toStrictEqual(new Position(-1, -1));
        expect(boundposition.confine(new Position(0, 0))).toStrictEqual(new Position(0, 0));
        expect(boundposition.confine(new Position(1, 1))).toStrictEqual(new Position(1, 1));
        expect(boundposition.confine(new Position(2, 2))).toStrictEqual(new Position(2, 2));

        expect(boundposition.confine(new Position(3, 2))).toStrictEqual(new Position(2, 2));
        expect(boundposition.confine(new Position(2, 3))).toStrictEqual(new Position(2, 2));
        expect(boundposition.confine(new Position(3, 3))).toStrictEqual(new Position(2, 2));

    });

    test('expand not needed, while already withing', () => {

        const boundposition = new Boundposition(
            new Position(-3, -3),
            new Position(2, 2)
        );

        expect(boundposition.bottomLeft()).toStrictEqual(new Position(-3, -3));
        expect(boundposition.topRight()).toStrictEqual(new Position(2, 2));

        const within = new Position(0,0);

        boundposition.expand(within);

        expect(boundposition.bottomLeft()).toStrictEqual(new Position(-3, -3));
        expect(boundposition.topRight()).toStrictEqual(new Position(2, 2));

    });

    test('expand leftBottom', () => {

        const boundposition = new Boundposition(
            new Position(-3, -3),
            new Position(2, 2)
        );

        expect(boundposition.bottomLeft()).toStrictEqual(new Position(-3, -3));
        expect(boundposition.topRight()).toStrictEqual(new Position(2, 2));

        const within = new Position(-10,-11);

        boundposition.expand(within);

        expect(boundposition.bottomLeft()).toStrictEqual(new Position(-10, -11));
        expect(boundposition.topRight()).toStrictEqual(new Position(2, 2));

    });

    test('width -> both x above 0', () => {

        const boundposition = new Boundposition(
            new Position(2, 2),
            new Position(3, 2)
        );

        expect(boundposition.getWidth()).toBe(2);

    });

    test('width -> both x below 0', () => {

        const boundposition = new Boundposition(
            new Position(-3, 2),
            new Position(-2, 2)
        );

        expect(boundposition.getWidth()).toBe(2);

    });

    test('width -> one 0 and one above', () => {

        const boundposition = new Boundposition(
            new Position(0, 2),
            new Position(2, 2)
        );

        expect(boundposition.getWidth()).toBe(3);

    });

    test('width', () => {

        const boundposition = new Boundposition(
            new Position(1, 2),
            new Position(3, 2)
        );

        expect(boundposition.getWidth()).toBe(3);

    });

    test('height', () => {

        const boundposition = new Boundposition(
            new Position(1, 2),
            new Position(3, 2)
        );

        expect(boundposition.getHeight()).toBe(1);

    });

    test('height', () => {

        const boundposition = new Boundposition(
            new Position(1, -1),
            new Position(3, 1)
        );

        expect(boundposition.getHeight()).toBe(3);

    });

    test('height', () => {

        const boundposition = new Boundposition(
            new Position(1, 0),
            new Position(3, 2)
        );

        expect(boundposition.getHeight()).toBe(3);

    });

    test('height', () => {

        const boundposition = new Boundposition(
            new Position(1, 1),
            new Position(3, 3)
        );

        expect(boundposition.getHeight()).toBe(3);

    });

});
