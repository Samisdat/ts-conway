import { expect } from 'chai';

import Position from '../ts/position';

import Cell from '../ts/cell';

describe('Cell', () => {

    it('can be created', () => {

        let cell = new Cell(
            new Position(1, 2)
        );

        expect(cell).to.be.instanceof(Cell);

    });

    it('get x and y', () => {

        let position = new Position(1, 2);
        let cell = new Cell(position);

        expect(cell.x).to.be.equal(position.x);
        expect(cell.y).to.be.equal(position.y);
        expect(cell.position).to.be.equal(position);

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
