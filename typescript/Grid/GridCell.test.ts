import { expect } from 'chai';

import { Position } from '../Conway/position';


import {GridCell} from 'Grid/GridCell';
import {Config} from '../Config';


describe('GridCell', () => {

    it('can be created', () => {

        let gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(gridCell).to.be.instanceof(GridCell);

    });

    it('getter x, y, width and height for positive position ', () => {

        let gridCell = new GridCell(
            new Position(10, 10),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(gridCell.x).to.be.equal(10);
        expect(gridCell.y).to.be.equal(10);

    });

    it('get checkerboard color', () => {

        let gridCell: GridCell;

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(-1, -1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardLight);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, -1),
            new Position(0, 0)
        );

        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(1, -1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardLight);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(-1, 0),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, 0),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCenter);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(1, 0),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(-1, 1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardLight);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(1, 1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).to.be.equal(Config.colorCheckerboardLight);


    });

    it('get relative and absolute position', () => {

        let gridCell: GridCell;

        gridCell = new GridCell(new Position(0, 0), new Position(0, 0), new Position(0, 0));

        expect(gridCell.relativePosition).to.be.deep.equal(new Position(0, 0));
        expect(gridCell.absolutePosition).to.be.deep.equal(new Position(0, 0));

        gridCell = new GridCell(new Position(0, 0), new Position(2, 3), new Position(0, 0));

        expect(gridCell.relativePosition).to.be.deep.equal(new Position(0, 0));
        expect(gridCell.absolutePosition).to.be.deep.equal(new Position(2, 3));

        gridCell = new GridCell(new Position(0, 0), new Position(-2, -3), new Position(0, 0));

        expect(gridCell.relativePosition).to.be.deep.equal(new Position(0, 0));
        expect(gridCell.absolutePosition).to.be.deep.equal(new Position(-2, -3));

    });

});
