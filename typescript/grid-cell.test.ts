import { expect } from 'chai';

import Position from './position';
import LivingCell from './grid-cell-types/living-cell';

import GridCell from './grid-cell';


describe('GridCell', () => {

    it('can be created', () => {

        let gridCell = new GridCell(new Position(0, 0));

        expect(gridCell).to.be.instanceof(GridCell);

    });

    it('getter x, y, width and height for positive position ', () => {

        let gridCell = new GridCell(new Position(10, 10));

        expect(gridCell.x).to.be.equal(10);
        expect(gridCell.y).to.be.equal(10);

    });

    it('get/set color', () => {

        let gridCell = new GridCell(new Position(0, 0));

        expect(gridCell.getColor()).to.be.undefined;

        gridCell.setType(new LivingCell());
        expect(gridCell.getColor()).to.be.equal('#000000');

    });

});
