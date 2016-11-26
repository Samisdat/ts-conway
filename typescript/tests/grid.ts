import { expect } from 'chai';

import Position from '../src/position';
import Grid from '../src/grid';

describe('Grid', () => {

    it('can be created', () => {

        let grid = new Grid(3, 3);

        expect(grid).to.be.instanceof(Grid);

    });

    it('get grid with odd number of rows and cols', () => {

        let grid = new Grid(3, 3);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getWidth()).to.be.deep.equal(3);
        expect(grid.getHeight()).to.be.deep.equal(3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(9);

    });

    it('get grid with odd of rows and even cols', () => {

        let grid = new Grid(4, 3);
        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, -0.5));
        expect(grid.getWidth()).to.be.deep.equal(3);
        expect(grid.getHeight()).to.be.deep.equal(6);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(18);

    });

    it('get grid even rows and odd cols', () => {

        let grid = new Grid(3, 4);
        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, 0));
        expect(grid.getWidth()).to.be.deep.equal(6);
        expect(grid.getHeight()).to.be.deep.equal(3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(18);

    });

    it('changes on cells persist', () => {

        let grid = new Grid(3, 3);

        expect(grid.getCell(0, 0).getColor()).to.be.undefined;

        grid.getCell(0, 0).setColor('#f00');
        expect(grid.getCell(0, 0).getColor()).to.be.equal('#f00');

        const cells = grid.getCells();
        
        expect(cells[0].getColor()).to.be.equal('#f00');

    });

});
