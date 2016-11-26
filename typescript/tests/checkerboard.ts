import { expect } from 'chai';

import Grid from '../src/grid';
import Checkerboard from '../src/checkerboard';

describe('Checkerboard', () => {

    it('can be created', () => {

        let checkerboard = new Checkerboard('#000', '#fff');

        expect(checkerboard).to.be.instanceof(Checkerboard);

    });

    it('creates a checkerboard pattern', () => {

        let checkerboard = new Checkerboard('#000', '#fff');

        let grid = new Grid(3, 3);

        checkerboard.update(grid);

        expect(grid.getCell(0, 0).getColor()).to.be.equal('#fff');
        expect(grid.getCell(1, 0).getColor()).to.be.undefined;
        expect(grid.getCell(2, 0).getColor()).to.be.equal('#fff');

        expect(grid.getCell(1, 0).getColor()).to.be.undefined;
        expect(grid.getCell(1, 1).getColor()).to.be.equal('#fff');
        expect(grid.getCell(1, 2).getColor()).to.be.undefined;
        
        expect(grid.getCell(0, 2).getColor()).to.be.equal('#fff');
        expect(grid.getCell(1, 2).getColor()).to.be.undefined;        
        expect(grid.getCell(2, 2).getColor()).to.be.equal('#fff');


    });

});


