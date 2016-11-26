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

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(3);
        expect(cells[0].length).to.be.equal(3);
        expect(cells[1].length).to.be.equal(3);
        expect(cells[2].length).to.be.equal(3);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));

    });

    it('get grid with odd of rows and even cols', () => {

        let grid = new Grid(4, 3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(6);
        expect(cells[0].length).to.be.equal(3);
        expect(cells[1].length).to.be.equal(3);
        expect(cells[2].length).to.be.equal(3);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, -0.5));

    });

    it('get grid even rows and odd cols', () => {

        let grid = new Grid(3, 4);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(3);
        expect(cells[0].length).to.be.equal(6);
        expect(cells[1].length).to.be.equal(6);
        expect(cells[2].length).to.be.equal(6);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, 0));

    });

    it('changes on cells persist', () => {

        let grid = new Grid(3, 3);

        const cells = grid.getCells();
        
        cells[0][0] = 'dark';

        expect(cells[0][0]).to.be.equal('dark');

        const again = grid.getCells();
        expect(cells[0][0]).to.be.equal('dark');

    });

});
