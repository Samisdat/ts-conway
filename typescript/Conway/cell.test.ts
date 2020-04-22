import { expect } from 'chai';

import { Position } from 'Conway/position';

import { Cell } from 'Conway/cell';

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

        before(() => {

            cell = new Cell(position);

        });

        it('alive some time after  creation', () => {

            expect(cell.isAlive()).to.be.false;

            cell.elapse();
            expect(cell.isAlive()).to.be.true;

        });

        it('kill', () => {

            cell.elapse();
            expect(cell.isAlive()).to.be.true;

            cell.kill();
            expect(cell.isAlive()).to.be.true;

            cell.elapse();
            expect(cell.isAlive()).to.be.false;

        });

    });

});
