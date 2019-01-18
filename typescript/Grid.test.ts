import { expect } from 'chai';

import { Position } from '@Conway/position';

import { Grid } from './Grid';
import {GridDimension} from '@Grid/GridDimension';
import {Habitat} from '@Conway/habitat';
import {IntegerPosition} from '@Conway/IntegerPosition';

describe('Grid', () => {

    let habitat: Habitat;
    before(() => {

        habitat = new Habitat(1000);

    });

    it('can be created', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 5),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid).to.be.instanceOf(Grid);

    });

    it('throw execption for offset.x below -1 or higher then 1', () => {

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(-1.1, 0)
            );

        }).to.throw(
            Error, 'offset.x must be between -1 and 1'
        );

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(1.1, 0)
            );

        }).to.throw(
            Error, 'offset.x must be between -1 and 1'
        );

    });

    it('throw execption for offset.y below -1 or higher then 1', () => {

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(0, -1.1)
            );

        }).to.throw(
            Error, 'offset.y must be between -1 and 1'
        );

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new IntegerPosition(0, 0),
                new Position(0, 1.1)
            );

        }).to.throw(
            Error, 'offset.y must be between -1 and 1'
        );

    });


    it('get rows/cols odd number of rows/cols', () => {

        let grid = new Grid(
                habitat,
                new GridDimension(3, 5),
                new IntegerPosition(0, 0),
                new Position(0, 0)
            );

        expect(grid.getRows()).to.be.equal(3);
        expect(grid.getCols()).to.be.equal(5);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new IntegerPosition(0, 0)
        );

        expect(grid.getOffset()).to.be.deep.equal(
            new Position(0, 0)
        );

        expect(grid.getCells().length).to.be.equal(3 * 5);

    });

    it('get rows/cols odd number of rows/cols with integer offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 5),
            new IntegerPosition(-1, -2),
            new Position(0, 0)
        );

        expect(grid.getRows()).to.be.equal(3);
        expect(grid.getCols()).to.be.equal(5);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new IntegerPosition(-1, -2)
        );

        expect(grid.getOffset()).to.be.deep.equal(
            new Position(0, 0)
        );

    });

    it('get rows/cols odd number of rows/cols with decimal offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 5),
            new IntegerPosition(-1, -2),
            new Position(-0.5, -0.5)
        );

        expect(grid.getRows()).to.be.equal(3);
        expect(grid.getCols()).to.be.equal(5);

        expect(grid.getSourcePosition()).to.be.deep.equal(
            new IntegerPosition(-1, -2)
        );

        expect(grid.getOffset()).to.be.deep.equal(
            new Position(-0.5, -0.5)
        );

    });

    it('get relative and absolute positions', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(1, 1),
            new IntegerPosition(-1, -2),
            new Position(0, 0)
        );


        const cells = grid.getCells();

        expect(cells.length).to.be.equal(1);

        const cell = cells[0];

        expect(cell.relativePosition).to.be.deep.equal(
            new IntegerPosition(0, 0)
        );

        expect(cell.absolutePosition).to.be.deep.equal(
            new IntegerPosition(-1, -2)
        );

    });

    it('get cell with offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(1, 1),
            new IntegerPosition(0, 0),
            new Position(-0.5, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).to.be.equal(1);

        const cellOne = cells[0];

        expect(cellOne.relativePosition).to.be.deep.equal(
            new IntegerPosition(0, 0)
        );

        expect(cellOne.x).to.be.equal(-0.5);

        expect(cellOne.absolutePosition).to.be.deep.equal(
            new IntegerPosition(0, 0)
        );

    });

    it('get cells positions without offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).to.be.equal(9);

        const relativePositions: Position[] = [];
        const absolutePositions: Position[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).to.be.deep.equal([
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        // no offset, so relative and absolute positions should be the same
        expect(relativePositions).to.be.deep.equal(absolutePositions);

    });

    it('get cells positions with offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
            new Position(-0.5, -0.5)
        );

        const cells = grid.getCells();

        expect(cells.length).to.be.equal(9);

        const relativePositions: Position[] = [];
        const absolutePositions: Position[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).to.be.deep.equal([
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        // no offset, so relative and absolute positions should be the same
        expect(relativePositions).to.be.deep.equal(absolutePositions);

    });

    it('get cells positions without offset 0/1', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 1),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).to.be.equal(9);

        const relativePositions: IntegerPosition[] = [];
        const absolutePositions: IntegerPosition[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).to.be.deep.equal([
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        expect(absolutePositions).to.be.deep.equal([
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1),
            new IntegerPosition(-1, 2),
            new IntegerPosition(0, 2),
            new IntegerPosition(1, 2)
        ]);

    });

    it('get cells positions without offset 1/0', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(1, 0),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).to.be.equal(9);

        const relativePositions: IntegerPosition[] = [];
        const absolutePositions: IntegerPosition[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).to.be.deep.equal([
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        expect(absolutePositions).to.be.deep.equal([
            new IntegerPosition(-1 + 1, -1),
            new IntegerPosition(0 + 1, -1),
            new IntegerPosition(1 + 1, -1),
            new IntegerPosition(-1 + 1, 0),
            new IntegerPosition(0 + 1, 0),
            new IntegerPosition(1 + 1, 0),
            new IntegerPosition(-1 + 1, 1),
            new IntegerPosition(0 + 1, 1),
            new IntegerPosition(1 + 1, 1)
        ]);

    });

    it('get cells coordinates without offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        const coordinates: Position[] = [];

        for (const cell of grid.getCells()) {
            coordinates.push(
                new Position(cell.x, cell.y)
            );
        }

        expect(coordinates).to.be.deep.equal([
            new Position(-1, -1),
            new Position(0, -1),
            new Position(1, -1),
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

    });

    it('get cells coordinates without offset -0.5/0', () => {

        const xOffset = -0.5;

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
            new Position(xOffset, 0)
        );

        const coordinates: Position[] = [];

        for (const cell of grid.getCells()) {
            coordinates.push(
                new Position(cell.x, cell.y)
            );
        }

        expect(coordinates).to.be.deep.equal([
            new Position(-1 + xOffset, -1),
            new Position(0 + xOffset, -1),
            new Position(1 + xOffset, -1),
            new Position(-1 + xOffset, 0),
            new Position(0 + xOffset, 0),
            new Position(1 + xOffset, 0),
            new Position(-1 + xOffset, 1),
            new Position(0 + xOffset, 1),
            new Position(1 + xOffset, 1)
        ]);

    });

    it('get cells coordinates without offset 0/-0.5', () => {

        const yOffset = -0.5;

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
            new Position(0, yOffset)
        );

        const coordinates: Position[] = [];

        for (const cell of grid.getCells()) {
            coordinates.push(
                new Position(cell.x, cell.y)
            );
        }

        expect(coordinates).to.be.deep.equal([
            new Position(-1, -1 + yOffset),
            new Position(0, -1 + yOffset),
            new Position(1, -1 + yOffset),
            new Position(-1, 0 + yOffset),
            new Position(0, 0 + yOffset),
            new Position(1, 0 + yOffset),
            new Position(-1, 1 + yOffset),
            new Position(0, 1 + yOffset),
            new Position(1, 1 + yOffset)
        ]);

    });

    it('relative center can be retrieved', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(1, 1),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).to.be.deep.equal(
            new IntegerPosition(0, 0)
        );

        grid = new Grid(
            habitat,
            new GridDimension(3, 1),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).to.be.deep.equal(
            new IntegerPosition(1, 0)
        );

        grid = new Grid(
            habitat,
            new GridDimension(1, 3),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).to.be.deep.equal(
            new IntegerPosition(0, 1)
        );


        grid = new Grid(
            habitat,
            new GridDimension(2, 2),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).to.be.deep.equal(
            new IntegerPosition(1, 1)
        );

        grid = new Grid(
            habitat,
            new GridDimension(4, 4),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).to.be.deep.equal(
            new IntegerPosition(2, 2)
        );

    });



});
