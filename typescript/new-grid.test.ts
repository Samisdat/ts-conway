import { expect } from 'chai';

import { Position } from './position';

import { NewGrid } from './new-grid';

describe('NewGrid', () => {

    before(() => {


    });

    it('can be created', () => {

        let grid = new NewGrid(3, 5, new Position(0, 0));

        expect(grid).to.be.instanceOf(NewGrid);

    });

    it('throw execption for even number of cols and/or rows', () => {

        expect(()=> {
            new NewGrid(2, 3, new Position(0, 0))
        }).to.throw(
            Error, 'not yet implemented'
        );

        expect(()=> {
            new NewGrid(3, 2, new Position(0, 0))
        }).to.throw(
            Error, 'not yet implemented'
        );

    });


    it('get rows/cols odd number of rows/cols', () => {

        let grid = new NewGrid(3, 5, new Position(0, 0));

        expect(grid.getRows()).to.be.equal(3);
        expect(grid.getCols()).to.be.equal(5);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new Position(0, 0)
        );

        expect(grid.getOffset()).to.be.deep.equal(
            new Position(0, 0)
        );

        expect(grid.getCells().length).to.be.equal(3 * 5);

    });

    it('get rows/cols odd number of rows/cols with integer offset', () => {

        let grid = new NewGrid(3, 5, new Position(-1, -2));

        expect(grid.getRows()).to.be.equal(3);
        expect(grid.getCols()).to.be.equal(5);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new Position(-1, -2)
        );

        expect(grid.getOffset()).to.be.deep.equal(
            new Position(0, 0)
        );

    });

    it('get rows/cols odd number of rows/cols with decimal offset', () => {

        let grid = new NewGrid(3, 5, new Position(-1.5, -2.5));

        expect(grid.getRows()).to.be.equal(5);
        expect(grid.getCols()).to.be.equal(7);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new Position(-1.5, -2.5)
        );

        expect(grid.getOffset()).to.be.deep.equal(
            new Position(-0.5, -0.5)
        );

    });

    it('get rows/cols odd number of rows/cols with decimal offset', () => {

        let grid = new NewGrid(3, 5, new Position(-1.3, -2.8));

        expect(grid.getRows()).to.be.equal(5);
        expect(grid.getCols()).to.be.equal(7);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new Position(-1.3, -2.8)
        );

        expect(grid.getOffset().x).to.be.approximately(-0.3, 0.001);
        expect(grid.getOffset().y).to.be.approximately(-0.8, 0.001);

    });

});
