import { expect } from 'chai';

import { Bound } from './bound';

describe('Bound', () => {

    it('can be created', () => {

        let bound = new Bound(1, 2);

        expect(bound).toBeInstanceOf(Bound);

    });

    it('create fails when max is lower then min ', () => {

        const createBound = function() {
            let bound = new Bound(2, 1);
        };

        expect(createBound).to.throw(Error, 'max can not be lower then min');

    });

    it('within', () => {

        let bound = new Bound(-2, 2);

        expect(bound.isWithin(-3)).to.be.false;
        expect(bound.isWithin(-2)).to.be.true;
        expect(bound.isWithin(-1)).to.be.true;
        expect(bound.isWithin(0)).to.be.true;
        expect(bound.isWithin(1)).to.be.true;
        expect(bound.isWithin(2)).to.be.true;
        expect(bound.isWithin(3)).to.be.false;

    });

    it('is above', () => {

        let bound = new Bound(-2, 2);

        expect(bound.isAbove(-3)).to.be.false;
        expect(bound.isAbove(-2)).to.be.false;
        expect(bound.isAbove(-1)).to.be.false;
        expect(bound.isAbove(0)).to.be.false;
        expect(bound.isAbove(1)).to.be.false;
        expect(bound.isAbove(2)).to.be.false;
        expect(bound.isAbove(3)).to.be.true;

    });

    it('is below', () => {

        let bound = new Bound(-2, 2);

        expect(bound.isBelow(-3)).to.be.true;
        expect(bound.isBelow(-2)).to.be.false;
        expect(bound.isBelow(-1)).to.be.false;
        expect(bound.isBelow(0)).to.be.false;
        expect(bound.isBelow(1)).to.be.false;
        expect(bound.isBelow(2)).to.be.false;
        expect(bound.isBelow(3)).to.be.false;

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
