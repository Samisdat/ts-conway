import { expect } from 'chai';

import Bound from '../src/bound';

describe('Bound', () => {

    it('can be created', () => {

        let bound = new Bound(1, 2);

        expect(bound).to.be.instanceof(Bound);

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

    it('confine', () => {

        let bound = new Bound(-2, 2);

        expect(bound.confine(-3)).to.be.equal(-2);
        expect(bound.confine(-2)).to.be.equal(-2);
        expect(bound.confine(-1)).to.be.equal(-1);
        expect(bound.confine(0)).to.be.equal(0);
        expect(bound.confine(1)).to.be.equal(1);
        expect(bound.confine(2)).to.be.equal(2);
        expect(bound.confine(3)).to.be.equal(2);

    });

});
