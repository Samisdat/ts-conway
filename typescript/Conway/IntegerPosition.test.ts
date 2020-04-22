import { expect } from 'chai';

import { Position } from 'Conway/position';
import { IntegerPosition } from 'Conway/IntegerPosition';

describe('IntegerPosition', () => {

    it('can be created', () => {

        let position = new IntegerPosition(1, 2);

        expect(position).toBeInstanceOf(Position);

    });

    it('throw execption for x with decimal value', () => {

        expect(() => {
            new IntegerPosition(0.5, 1);
        }).to.throw(
            Error, 'not an integer value'
        );

    });

    it('throw execption for y with decimal value', () => {

        expect(() => {
            new IntegerPosition(1, 0.5);
        }).to.throw(
            Error, 'not an integer value'
        );

    });

    it('clone', () => {

        let position = new IntegerPosition(1, 2);

        let cloned = position.clone();

        expect(cloned).toBeInstanceOf(IntegerPosition);

        expect(cloned.x).toBe(1);
        expect(cloned.y).toBe(2);


    });

    it('x and y', () => {

        let position = new IntegerPosition(1, 2);

        expect(position.x).toBe(1);
        expect(position.y).toBe(2);

    });

    it('move', () => {

        let position = new IntegerPosition(1, 2);

        let moved = position.move(
            new IntegerPosition(10, 20)
        );

        expect(moved.x).toBe(11);
        expect(moved.y).toBe(22);

    });

    it('inverse', () => {

        let position = new IntegerPosition(2, 3);

        let inversed = position.inverse();

        expect(inversed.x).toBe(-2);
        expect(inversed.y).toBe(-3);

        inversed = inversed.inverse();

        expect(inversed.x).toBe(2);
        expect(inversed.y).toBe(3);

    });

    it('compare', () => {

        let positionA = new IntegerPosition(2, 2);
        let positionB = new IntegerPosition(2, 2);
        let positionC = new IntegerPosition(4, 4);

        expect(positionA.compare(positionB)).to.be.true;
        expect(positionA.compare(positionC)).to.be.false;

    });


    it('get neighbours', () => {

        let position = new IntegerPosition(3, 3);
        let neighbours = position.getNeighbours();

        expect(neighbours.length).toBe(8);

        expect(neighbours[0]).to.be.deep.equal(new IntegerPosition(2, 2));
        expect(neighbours[1]).to.be.deep.equal(new IntegerPosition(3, 2));
        expect(neighbours[2]).to.be.deep.equal(new IntegerPosition(4, 2));
        expect(neighbours[3]).to.be.deep.equal(new IntegerPosition(2, 3));
        expect(neighbours[4]).to.be.deep.equal(new IntegerPosition(4, 3));
        expect(neighbours[5]).to.be.deep.equal(new IntegerPosition(2, 4));
        expect(neighbours[6]).to.be.deep.equal(new IntegerPosition(3, 4));
        expect(neighbours[7]).to.be.deep.equal(new IntegerPosition(4, 4));

    });

});
