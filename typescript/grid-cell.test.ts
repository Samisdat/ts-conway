import { expect } from 'chai';

import Position from './position';
import LivingCell from './grid-cell-types/living-cell';

import GridCell from './grid-cell';

import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';

const darkColor: CheckerboardDark = new CheckerboardDark();
const lightColor: CheckerboardLight = new CheckerboardLight();

describe('GridCell', () => {

    it('can be created', () => {

        let gridCell = new GridCell(new Position(0, 0), new Position(0, 0));

        expect(gridCell).to.be.instanceof(GridCell);

    });

    it('getter x, y, width and height for positive position ', () => {

        let gridCell = new GridCell(new Position(10, 10), new Position(0, 0));

        expect(gridCell.x).to.be.equal(10);
        expect(gridCell.y).to.be.equal(10);

    });

    it('get checkerboard color', () => {

        let gridCell: GridCell;

        gridCell = new GridCell(new Position(-1, -1), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(lightColor.hex);

        gridCell = new GridCell(new Position(0, -1), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(darkColor.hex);

        gridCell = new GridCell(new Position(1, -1), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(lightColor.hex);

        gridCell = new GridCell(new Position(-1, 0), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(darkColor.hex);

        gridCell = new GridCell(new Position(0, 0), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(lightColor.hex);

        gridCell = new GridCell(new Position(1, 0), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(darkColor.hex);

        gridCell = new GridCell(new Position(-1, 1), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(lightColor.hex);

        gridCell = new GridCell(new Position(0, 1), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(darkColor.hex);

        gridCell = new GridCell(new Position(1, 1), new Position(0, 0));
        expect(gridCell.getColor()).to.be.equal(lightColor.hex);


    });

    it('getGridOffset', () => {

        let gridCell = new GridCell(new Position(0, 0), new Position(1, 1));

        expect(gridCell.getGridOffset()).to.be.deep.equal(new Position(1, 1));

    });

});
