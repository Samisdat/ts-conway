import { expect } from 'chai';

import { Position } from './position';

describe('Position', () => {

    it('can be created', () => {

        let position = new Position(1, 2);

        expect(position).to.be.instanceof(Position);

    });

    it('x and y', () => {

        let position = new Position(1, 2);

        expect(position.x).to.be.equal(1);
        expect(position.y).to.be.equal(2);

    });

    it('move', () => {

        let position = new Position(1, 2);

        let moved = position.move(
            new Position(10, 20)
        );

        expect(moved.x).to.be.equal(11);
        expect(moved.y).to.be.equal(22);

    });

    it('clone', () => {

        let position = new Position(1, 2);

        let cloned = position.clone();

        expect(cloned).to.be.instanceof(Position);

        expect(cloned.x).to.be.equal(1);
        expect(cloned.y).to.be.equal(2);


    });

    it('inverse', () => {

        let position = new Position(2, 3);

        let inversed = position.inverse();

        expect(inversed.x).to.be.equal(-2);
        expect(inversed.y).to.be.equal(-3);

        inversed = inversed.inverse();

        expect(inversed.x).to.be.equal(2);
        expect(inversed.y).to.be.equal(3);

    });

    it('compare', () => {

        let positionA = new Position(2, 2);
        let positionB = new Position(2, 2);
        let positionC = new Position(4, 4);

        expect(positionA.compare(positionB)).to.be.true;
        expect(positionA.compare(positionC)).to.be.false;


    });


    it('get neighbours', () => {

        let position = new Position(3, 3);
        let neighbours = position.getNeighbours();

        expect(neighbours.length).to.be.equal(8);

        expect(neighbours[0]).to.be.deep.equal(new Position(2, 2));
        expect(neighbours[1]).to.be.deep.equal(new Position(3, 2));
        expect(neighbours[2]).to.be.deep.equal(new Position(4, 2));
        expect(neighbours[3]).to.be.deep.equal(new Position(2, 3));
        expect(neighbours[4]).to.be.deep.equal(new Position(4, 3));
        expect(neighbours[5]).to.be.deep.equal(new Position(2, 4));
        expect(neighbours[6]).to.be.deep.equal(new Position(3, 4));
        expect(neighbours[7]).to.be.deep.equal(new Position(4, 4));



    });


});
