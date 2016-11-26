import { expect } from 'chai';

import Position from '../src/position';
import GridCell from '../src/grid-cell';

describe('GridCell', () => {

    it('can be created', () => {

        let gridCell = new GridCell(3, 3);

        expect(gridCell).to.be.instanceof(GridCell);

    });

    it('get row and col', () => {

        let gridCell = new GridCell(3, 4);

        expect(gridCell.getRow()).to.be.equal(4);
        expect(gridCell.getCol()).to.be.equal(3);

    });

    it('get/set color', () => {

        let gridCell = new GridCell(3, 3);

        expect(gridCell.getColor()).to.be.undefined;

        gridCell.setColor('#f00');
        expect(gridCell.getColor()).to.be.equal('#f00');

    });

});
