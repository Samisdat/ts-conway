import { expect } from 'chai';

import Position from '../src/position';
import Canvas from '../src/canvas';

import GridCell from '../src/grid-cell';
import Grid from '../src/grid';

describe('Grid', () => {

    it('odd number of cols and rows ', () => {

        let grid = new Grid(3, 3, 1);

        expect(grid).to.be.instanceof(Grid);
        expect(grid.getCols()).to.be.equal(3);
        expect(grid.getRows()).to.be.equal(3);
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));

    });

    it('even number of cols and rows ', () => {

        let grid = new Grid(4, 4, 1);

        expect(grid).to.be.instanceof(Grid);
        expect(grid.getCols()).to.be.equal(5);
        expect(grid.getRows()).to.be.equal(5);
        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, -0.5));

    });

    it.skip('can be created', () => {

        let grid = new Grid(400, 400, 100);

        expect(grid).to.be.instanceof(Grid);

    });

    it.skip('odd -> number of rows and cols', () => {

        let grid = new Grid(300, 300, 100);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));
        
        expect(grid.getWidth()).to.be.deep.equal(300);
        expect(grid.getHeight()).to.be.deep.equal(300);
        expect(grid.getCols()).to.be.deep.equal(3);
        expect(grid.getRows()).to.be.deep.equal(3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(9);

    });

    it.skip('odd -> number of rows and cols', () => {

        let grid = new Grid(300, 300, 100, new Position(1,0));

        expect(grid.getZero()).to.be.deep.equal(new Position(1, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));
        
        expect(grid.getWidth()).to.be.deep.equal(300);
        expect(grid.getHeight()).to.be.deep.equal(300);
        expect(grid.getCols()).to.be.deep.equal(3);
        expect(grid.getRows()).to.be.deep.equal(3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(9);

    });

    it.skip('3.5 -> number of rows and cols', () => {

        let grid = new Grid(350, 350, 100);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.75, -0.75));
        
        expect(grid.getWidth()).to.be.deep.equal(350);
        expect(grid.getHeight()).to.be.deep.equal(350);
        expect(grid.getCols()).to.be.deep.equal(6);
        expect(grid.getRows()).to.be.deep.equal(6);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(25);

    });

    it.skip('even -> number of rows and cols', () => {

        let grid = new Grid(400, 400, 100);

        //expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, -0.5));
        
        expect(grid.getWidth()).to.be.deep.equal(400);
        expect(grid.getHeight()).to.be.deep.equal(400);
        expect(grid.getCols()).to.be.deep.equal(6);
        expect(grid.getRows()).to.be.deep.equal(6);


        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(25);

    });


    /*
    it.skip('can be created', () => {

        let grid = new Grid(3.3, 3.3);

        //expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        //expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));
        
        console.log(grid.getOffset())
        expect(grid.getWidth()).to.be.deep.equal(6);
        expect(grid.getHeight()).to.be.deep.equal(6);



        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(36);


    });

    it.skip('get grid with odd number of rows and cols', () => {

        let grid = new Grid(3, 3);

        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getWidth()).to.be.deep.equal(3);
        expect(grid.getHeight()).to.be.deep.equal(3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(9);

    });

    it.skip('get grid with odd of rows and even cols', () => {

        let grid = new Grid(4, 3);
        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(0, -0.5));
        expect(grid.getWidth()).to.be.deep.equal(3);
        expect(grid.getHeight()).to.be.deep.equal(6);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(18);

    });

    it.skip('get grid even rows and odd cols', () => {

        let grid = new Grid(3, 4);
        expect(grid.getZero()).to.be.deep.equal(new Position(0, 0));
        expect(grid.getOffset()).to.be.deep.equal(new Position(-0.5, 0));
        expect(grid.getWidth()).to.be.deep.equal(6);
        expect(grid.getHeight()).to.be.deep.equal(3);

        const cells = grid.getCells();
                
        expect(cells.length).to.be.equal(18);

    });
    /*
    it.skip('changes on cells persist', () => {

        let grid = new Grid(3, 3);

        expect(grid.getCell(0, 0).getColor()).to.be.undefined;

        grid.getCell(0, 0).setColor('#f00');
        expect(grid.getCell(0, 0).getColor()).to.be.equal('#f00');

        const cells = grid.getCells();
        
        expect(cells[0].getColor()).to.be.equal('#f00');

    });
    */
});
