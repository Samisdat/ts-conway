import {Bound} from '../bound';

describe('Bound', () => {

    it('can be created', () => {

        let bound = new Bound(1, 2);

        expect(bound).toBeInstanceOf(Bound);

    });

    it('create fails when max is lower then min ', () => {

        const createBound = function() {
            let bound = new Bound(2, 1);
        };

        expect(createBound).toThrowErrorMatchingSnapshot();

    });

    it('within', () => {

        let bound = new Bound(-2, 2);

        expect(bound.isWithin(-3)).toBeFalsy();
        expect(bound.isWithin(-2)).toBeTruthy();
        expect(bound.isWithin(-1)).toBeTruthy();
        expect(bound.isWithin(0)).toBeTruthy();
        expect(bound.isWithin(1)).toBeTruthy();
        expect(bound.isWithin(2)).toBeTruthy();
        expect(bound.isWithin(3)).toBeFalsy();

    });

    it('is above', () => {

        let bound = new Bound(-2, 2);

        expect(bound.isAbove(-3)).toBeFalsy();
        expect(bound.isAbove(-2)).toBeFalsy();
        expect(bound.isAbove(-1)).toBeFalsy();
        expect(bound.isAbove(0)).toBeFalsy();
        expect(bound.isAbove(1)).toBeFalsy();
        expect(bound.isAbove(2)).toBeFalsy();
        expect(bound.isAbove(3)).toBeTruthy();

    });

    it('is below', () => {

        let bound = new Bound(-2, 2);

        expect(bound.isBelow(-3)).toBeTruthy();
        expect(bound.isBelow(-2)).toBeFalsy();
        expect(bound.isBelow(-1)).toBeFalsy();
        expect(bound.isBelow(0)).toBeFalsy();
        expect(bound.isBelow(1)).toBeFalsy();
        expect(bound.isBelow(2)).toBeFalsy();
        expect(bound.isBelow(3)).toBeFalsy();

    });

    it('confine', () => {

        let bound = new Bound(-2, 2);

        expect(bound.confine(-3)).toBe(-2);
        expect(bound.confine(-2)).toBe(-2);
        expect(bound.confine(-1)).toBe(-1);
        expect(bound.confine(0)).toBe(0);
        expect(bound.confine(1)).toBe(1);
        expect(bound.confine(2)).toBe(2);
        expect(bound.confine(3)).toBe(2);

    });

});
