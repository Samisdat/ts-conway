import {Cell} from '../cell';
import {Position} from '../position';

describe('Cell', () => {

    it('can be created', () => {

        let cell = new Cell(
            new Position(1, 2)
        );

        expect(cell).toBeInstanceOf(Cell);

    });

    it('get x and y', () => {

        let position = new Position(1, 2);
        let cell = new Cell(position);

        expect(cell.x).toBe(position.x);
        expect(cell.y).toBe(position.y);
        expect(cell.position).toBe(position);

    });

    describe('livetime', () => {

        let position = new Position(1, 2);

        let cell;

        beforeEach(() => {

            cell = new Cell(position);

        });

        it('alive some time after  creation', () => {

            expect(cell.isAlive()).toBeFalsy;

            cell.elapse();
            expect(cell.isAlive()).toBeTruthy;

        });

        it('kill', () => {

            cell.elapse();
            expect(cell.isAlive()).toBeTruthy;

            cell.kill();
            expect(cell.isAlive()).toBeTruthy;

            cell.elapse();
            expect(cell.isAlive()).toBeFalsy;

        });

    });

});
