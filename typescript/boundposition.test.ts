import { expect } from 'chai';

import { Position } from './position';
import { BoundPosition } from './boundposition';

describe('PositionBound', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let bound = new BoundPosition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(bound).to.be.instanceof(BoundPosition);

    });

    it('create fails when right is not right from left ', () => {

        const createBound = function () {
            let bound = new BoundPosition(
                new Position(2, 0),
                new Position(-2, 0)
            );
        };

        expect(createBound).to.throw(Error, 'bottomRight must be right from topLeft');

    });

    it('create fails when bottom is not below from top', () => {

        const createBound = function () {
            let bound = new BoundPosition(
                new Position(1, 2),
                new Position(2, 1)
            );
        };

        expect(createBound).to.throw(Error, 'bottomRight must be below from topLeft');

    });

    it('within', () => {

        let bound = new BoundPosition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(bound.isWithin(new Position(-3, -3))).to.be.false;
        expect(bound.isWithin(new Position(-2, -3))).to.be.false;
        expect(bound.isWithin(new Position(-3, -2))).to.be.false;

        expect(bound.isWithin(new Position(-2, -2))).to.be.true;
        expect(bound.isWithin(new Position(-1, -1))).to.be.true;
        expect(bound.isWithin(new Position(0, 0))).to.be.true;
        expect(bound.isWithin(new Position(1, 1))).to.be.true;
        expect(bound.isWithin(new Position(2, 2))).to.be.true;

        expect(bound.isWithin(new Position(3, 2))).to.be.false;
        expect(bound.isWithin(new Position(2, 3))).to.be.false;
        expect(bound.isWithin(new Position(3, 3))).to.be.false;

    });

    it('confine', () => {

        let bound = new BoundPosition(
            new Position(-2, -2),
            new Position(2, 2)
        );

        expect(bound.confine(new Position(-3, -3))).to.be.deep.equal(new Position(-2, -2));
        expect(bound.confine(new Position(-2, -3))).to.be.deep.equal(new Position(-2, -2));
        expect(bound.confine(new Position(-3, -2))).to.be.deep.equal(new Position(-2, -2));

        expect(bound.confine(new Position(-2, -2))).to.be.deep.equal(new Position(-2, -2));
        expect(bound.confine(new Position(-1, -1))).to.be.deep.equal(new Position(-1, -1));
        expect(bound.confine(new Position(0, 0))).to.be.deep.equal(new Position(0, 0));
        expect(bound.confine(new Position(1, 1))).to.be.deep.equal(new Position(1, 1));
        expect(bound.confine(new Position(2, 2))).to.be.deep.equal(new Position(2, 2));

        expect(bound.confine(new Position(3, 2))).to.be.deep.equal(new Position(2, 2));
        expect(bound.confine(new Position(2, 3))).to.be.deep.equal(new Position(2, 2));
        expect(bound.confine(new Position(3, 3))).to.be.deep.equal(new Position(2, 2));

    });

});
