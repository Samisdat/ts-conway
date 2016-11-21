import { expect } from 'chai';

import Position from '../src/position';
import getNeighbours from '../src/neighbours';

describe('getNeighbours', () => {

    beforeEach(function () {
    });

    it('is a function', () => {

        expect(getNeighbours).to.be.instanceof(Function);

    });

    it('returns all neighbours', () => {

        let position = new Position(3, 3);
        let neighbours = getNeighbours(position);

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
