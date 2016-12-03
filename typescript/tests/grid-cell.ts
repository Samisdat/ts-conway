import { expect } from 'chai';

import Position from '../src/position';
import LivingCell from '../src/grid-cell-types/living-cell';

import GridCell from '../src/grid-cell';


describe('GridCell', () => {

    it('can be created', () => {

        let gridCell = new GridCell(new Position(0, 0), 100);

        expect(gridCell).to.be.instanceof(GridCell);

    });

    it('getter x, y, width and height for positive position ', () => {

        let gridCell = new GridCell(new Position(10, 10), 100);

        expect(gridCell.x).to.be.equal(10);
        expect(gridCell.y).to.be.equal(10);
        expect(gridCell.width).to.be.equal(100);
        expect(gridCell.height).to.be.equal(100);

    });

    it('getter x, y, width and height for positive position.x and negative y', () => {

        let gridCell = new GridCell(new Position(0, -50), 100);

        expect(gridCell.x).to.be.equal(0);
        expect(gridCell.y).to.be.equal(0);
        expect(gridCell.width).to.be.equal(100);
        expect(gridCell.height).to.be.equal(50);

    });

    it('getter x, y, width and height for negative position.x and positive y', () => {

        let gridCell = new GridCell(new Position(-50, 0), 100);

        expect(gridCell.x).to.be.equal(0);
        expect(gridCell.y).to.be.equal(0);
        expect(gridCell.width).to.be.equal(50);
        expect(gridCell.height).to.be.equal(100);

    });

    it('getter x, y, width and height for negative position.x and negative y', () => {

        let gridCell = new GridCell(new Position(-50, -25), 100);

        expect(gridCell.x).to.be.equal(0);
        expect(gridCell.y).to.be.equal(0);
        expect(gridCell.width).to.be.equal(50);
        expect(gridCell.height).to.be.equal(75);

    });

    it('get/set color', () => {

        let gridCell = new GridCell(new Position(0, 0), 100);

        expect(gridCell.getColor()).to.be.undefined;

        gridCell.setType(new LivingCell());
        expect(gridCell.getColor()).to.be.equal('#000000');

    });

});
