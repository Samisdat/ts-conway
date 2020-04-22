import { expect } from 'chai';

import { Position } from 'Conway/position';

describe('Position', () => {

    it('can be created', () => {

        let position = new Position(1, 2);

        expect(position).toBeInstanceOf(Position);

    });

    it('x and y', () => {

        let position = new Position(1, 2);

        expect(position.x).toBe(1);
        expect(position.y).toBe(2);

    });

    it('move', () => {

        let position = new Position(1, 2);

        let moved = position.move(
            new Position(10, 20)
        );

        expect(moved.x).toBe(11);
        expect(moved.y).toBe(22);

    });

    it('clone', () => {

        let position = new Position(1, 2);

        let cloned = position.clone();

        expect(cloned).toBeInstanceOf(Position);

        expect(cloned.x).toBe(1);
        expect(cloned.y).toBe(2);


    });

    it('inverse', () => {

        let position = new Position(2, 3);

        let inversed = position.inverse();

        expect(inversed.x).toBe(-2);
        expect(inversed.y).toBe(-3);

        inversed = inversed.inverse();

        expect(inversed.x).toBe(2);
        expect(inversed.y).toBe(3);

    });

    it('compare', () => {

        let positionA = new Position(2, 2);
        let positionB = new Position(2, 2);
        let positionC = new Position(4, 4);

        expect(positionA.compare(positionB)).toBeTruthy;
        expect(positionA.compare(positionC)).toBeFalsy;


    });


    it('get neighbours', () => {

        let position = new Position(3, 3);
        let neighbours = position.getNeighbours();

        expect(neighbours.length).toBe(8);

        expect(neighbours[0]).toStrictEqual(new Position(2, 2));
        expect(neighbours[1]).toStrictEqual(new Position(3, 2));
        expect(neighbours[2]).toStrictEqual(new Position(4, 2));
        expect(neighbours[3]).toStrictEqual(new Position(2, 3));
        expect(neighbours[4]).toStrictEqual(new Position(4, 3));
        expect(neighbours[5]).toStrictEqual(new Position(2, 4));
        expect(neighbours[6]).toStrictEqual(new Position(3, 4));
        expect(neighbours[7]).toStrictEqual(new Position(4, 4));



    });


});
