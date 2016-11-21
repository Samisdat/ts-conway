import { expect } from 'chai';

import Position from '../ts/position';

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

});
