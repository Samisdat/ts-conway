import {BoundPosition} from '@Conway/Control/boundposition';
import {Position} from '@Conway/Conway/Position';

describe('PositionBound', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let bound = new BoundPosition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(bound).toBeInstanceOf(BoundPosition);

    });

    it('create fails when right is not right from left ', () => {

        const createBound = function () {
            let bound = new BoundPosition(
                new Position(2, 0),
                new Position(-2, 0)
            );
        };

        expect(createBound).toThrowErrorMatchingSnapshot();

    });

    it('create fails when bottom is not below from top', () => {

        const createBound = function () {
            let bound = new BoundPosition(
                new Position(1, 2),
                new Position(2, 1)
            );
        };

        expect(createBound).toThrowErrorMatchingSnapshot();

    });

    it('within', () => {

        let bound = new BoundPosition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(bound.isWithin(new Position(-3, -3))).toBeFalsy();
        expect(bound.isWithin(new Position(-2, -3))).toBeFalsy();
        expect(bound.isWithin(new Position(-3, -2))).toBeFalsy();

        expect(bound.isWithin(new Position(-2, -2))).toBeTruthy();
        expect(bound.isWithin(new Position(-1, -1))).toBeTruthy();
        expect(bound.isWithin(new Position(0, 0))).toBeTruthy();
        expect(bound.isWithin(new Position(1, 1))).toBeTruthy();
        expect(bound.isWithin(new Position(2, 2))).toBeTruthy();

        expect(bound.isWithin(new Position(3, 2))).toBeFalsy();
        expect(bound.isWithin(new Position(2, 3))).toBeFalsy();
        expect(bound.isWithin(new Position(3, 3))).toBeFalsy();

    });

    it('confine', () => {

        let bound = new BoundPosition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(bound.confine(new Position(-3, -3))).toStrictEqual(new Position(-2, -2));
        expect(bound.confine(new Position(-2, -3))).toStrictEqual(new Position(-2, -2));
        expect(bound.confine(new Position(-3, -2))).toStrictEqual(new Position(-2, -2));

        expect(bound.confine(new Position(-2, -2))).toStrictEqual(new Position(-2, -2));
        expect(bound.confine(new Position(-1, -1))).toStrictEqual(new Position(-1, -1));
        expect(bound.confine(new Position(0, 0))).toStrictEqual(new Position(0, 0));
        expect(bound.confine(new Position(1, 1))).toStrictEqual(new Position(1, 1));
        expect(bound.confine(new Position(2, 2))).toStrictEqual(new Position(2, 2));

        expect(bound.confine(new Position(3, 2))).toStrictEqual(new Position(2, 2));
        expect(bound.confine(new Position(2, 3))).toStrictEqual(new Position(2, 2));
        expect(bound.confine(new Position(3, 3))).toStrictEqual(new Position(2, 2));

    });

});
