import { expect } from 'chai';

import Position from '../src/position';
import Canvas from '../src/canvas';

import GridCell from '../src/grid-cell';
import Grid from '../src/grid';

describe('Grid', () => {

    it('odd number of cols and rows ', () => {

        let grid = new Grid(300, 300, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(300);
        expect(grid.getHeight()).to.be.deep.equal(300);

        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(3);

        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(9);

    });

    it('odd number of cols and rows ', () => {

        let grid = new Grid(320, 320, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(320);
        expect(grid.getHeight()).to.be.deep.equal(320);

        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);

        expect(grid.getOffset().x).to.be.closeTo(-0.9, 0.000000000000001);
        expect(grid.getOffset().y).to.be.closeTo(-0.9, 0.000000000000001);

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(25);

    });

    it('even number of cols and rows ', () => {

        let grid = new Grid(400, 400, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(400);
        expect(grid.getHeight()).to.be.deep.equal(400);

        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);

        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, -0.5));

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(25);

    });

    it('even number of cols and rows ', () => {

        let grid = new Grid(420, 420, 100);

        expect(grid).to.be.instanceof(Grid);

        expect(grid.getWidth()).to.be.deep.equal(420);
        expect(grid.getHeight()).to.be.deep.equal(420);

        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);

        expect(grid.getOffset().x).to.be.closeTo(-0.4, 0.000000000000001);
        expect(grid.getOffset().y).to.be.closeTo(-0.4, 0.000000000000001);

        const cells = grid.getCells();
        expect(cells.length).to.be.equal(25);

    });

});
