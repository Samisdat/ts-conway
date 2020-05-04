import {IntegerPosition} from '@Conway/Conway/IntegerPosition';
import {Position} from '@Conway/Conway/Position';

describe('IntegerPosition', () => {

    it('can be created', () => {

        let position = new IntegerPosition(1, 2);

        expect(position).toBeInstanceOf(Position);

    });

    it('throw execption for x with decimal value', () => {

        expect(() => {
            new IntegerPosition(0.5, 1);
        }).toThrowErrorMatchingSnapshot();

    });

    it('throw execption for y with decimal value', () => {

        expect(() => {
            new IntegerPosition(1, 0.5);
        }).toThrowErrorMatchingSnapshot();

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

        expect(positionA.compare(positionB)).toBeTruthy;
        expect(positionA.compare(positionC)).toBeFalsy;

    });


    it('get neighbours', () => {

        let position = new IntegerPosition(3, 3);
        let neighbours = position.getNeighbours();

        expect(neighbours.length).toBe(8);

        expect(neighbours[0]).toStrictEqual(new IntegerPosition(2, 2));
        expect(neighbours[1]).toStrictEqual(new IntegerPosition(3, 2));
        expect(neighbours[2]).toStrictEqual(new IntegerPosition(4, 2));
        expect(neighbours[3]).toStrictEqual(new IntegerPosition(2, 3));
        expect(neighbours[4]).toStrictEqual(new IntegerPosition(4, 3));
        expect(neighbours[5]).toStrictEqual(new IntegerPosition(2, 4));
        expect(neighbours[6]).toStrictEqual(new IntegerPosition(3, 4));
        expect(neighbours[7]).toStrictEqual(new IntegerPosition(4, 4));

    });

});
