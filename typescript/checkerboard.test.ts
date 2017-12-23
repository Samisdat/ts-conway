import { expect } from 'chai';

import CheckerboardDark from '../src/grid-cell-types/checkerboard-dark';
import CheckerboardLight from '../src/grid-cell-types/checkerboard-light';

import Grid from '../src/grid';
import Checkerboard from '../src/checkerboard';

describe('Checkerboard', () => {

    it.skip('can be created', () => {

        let checkerboard = new Checkerboard();

        expect(checkerboard).to.be.instanceof(Checkerboard);

    });

    it('creates a checkerboard pattern on odd grid', () => {

        let checkerboard = new Checkerboard();

        let grid = new Grid(300, 300, 100);

        checkerboard.update(grid);

        expect(grid.getCell(-1, -1).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell( 0, -1).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell( 1, -1).getType()).to.be.instanceof(CheckerboardLight);

        expect(grid.getCell(-1,  0).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell( 0,  0).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell( 1,  0).getType()).to.be.instanceof(CheckerboardDark);

        expect(grid.getCell(-1,  1).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell( 0,  1).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell( 1,  1).getType()).to.be.instanceof(CheckerboardLight);


    });

    it.skip('creates a checkerboard pattern on even grid', () => {

        let checkerboard = new Checkerboard();

        let grid = new Grid(400, 400, 100);

        checkerboard.update(grid);

        expect(grid.getCell(0, 0).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell(1, 0).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell(2, 0).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell(3, 0).getType()).to.be.instanceof(CheckerboardDark);

        expect(grid.getCell(0, 1).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell(1, 1).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell(2, 1).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell(3, 1).getType()).to.be.instanceof(CheckerboardLight);

        expect(grid.getCell(0, 2).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell(1, 2).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell(2, 2).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell(3, 2).getType()).to.be.instanceof(CheckerboardDark);

        expect(grid.getCell(0, 3).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell(1, 3).getType()).to.be.instanceof(CheckerboardLight);
        expect(grid.getCell(2, 3).getType()).to.be.instanceof(CheckerboardDark);
        expect(grid.getCell(3, 3).getType()).to.be.instanceof(CheckerboardLight);

    });

});


