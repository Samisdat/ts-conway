import { expect } from 'chai';

import {GridCreator} from 'Grid/GridCreator';
import {Position} from '../position';


describe('GridCreator', () => {

    it('can be created', () => {

        let gridCreator = new GridCreator(
            200,
            200,
            100,
            new Position(0, 0),
            1
        );

        expect(gridCreator).to.be.instanceof(GridCreator);

    });

    it('absolute position and offset can be retrieved for integer pan', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(1, 3),
            1
        );

        expect(gridCreator.getPan()).to.be.deep.equal(new Position(1, 3));
        expect(gridCreator.getSourcePosition()).to.be.deep.equal(new Position(1, 3));
        expect(gridCreator.getOffset()).to.be.deep.equal(new Position(0, 0));

    });

    it('absolute position and offset can be retrieved for 0.5/0.5 pan', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0.5, 0.5),
            1
        );

        expect(gridCreator.getPan()).to.be.deep.equal(new Position(0.5, 0.5));
        expect(gridCreator.getSourcePosition()).to.be.deep.equal(new Position(0, 0));
        expect(gridCreator.getOffset()).to.be.deep.equal(new Position(0.5, 0.5));

    });

    it('absolute position and offset can be retrieved for 4.8/-3.3 pan', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(4.8, -3.3),
            1
        );

        expect(gridCreator.getPan()).to.be.deep.equal(new Position(4.8, -3.3));
        expect(gridCreator.getSourcePosition()).to.be.deep.equal(new Position(4, -3));
        expect(gridCreator.getOffset().x).to.be.approximately(0.8, 0.0001);
        expect(gridCreator.getOffset().y).to.be.approximately(-0.3, 0.0001);

    });

    it('an easy case', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0, 0),
            1
        );

        expect(gridCreator.getRows()).to.be.equal(1);
        expect(gridCreator.getCols()).to.be.equal(1);
        expect(gridCreator.getPan()).to.be.deep.equal(new Position(0, 0));
        expect(gridCreator.getZoom()).to.be.equal(1);

    });

    it('in the middle one cell and left and right one cutted cell', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            75,
            new Position(0, 0),
            1
        );

        expect(gridCreator.getRows()).to.be.equal(3);
        expect(gridCreator.getCols()).to.be.equal(3);
        expect(gridCreator.getPan()).to.be.deep.equal(new Position(0, 0));
        expect(gridCreator.getZoom()).to.be.equal(1);

    });

    it('zoom a little', () => {

        let gridCreator = new GridCreator(
            150,
            150,
            100,
            new Position(0, 0),
            0.5
        );

        expect(gridCreator.getRows()).to.be.equal(3);
        expect(gridCreator.getCols()).to.be.equal(3);
        expect(gridCreator.getPan()).to.be.deep.equal(new Position(0, 0));
        expect(gridCreator.getZoom()).to.be.equal(0.5);

    });

    it('move a little to the left', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(-0.5, 0),
            1
        );

        expect(gridCreator.getRows()).to.be.equal(3);
        expect(gridCreator.getCols()).to.be.equal(1);
        expect(gridCreator.getPan()).to.be.deep.equal(new Position(-0.5, 0));
        expect(gridCreator.getZoom()).to.be.equal(1);

    });

    it('move a little to the right', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0.5, 0),
            1
        );

        expect(gridCreator.getRows()).to.be.equal(3);
        expect(gridCreator.getCols()).to.be.equal(1);
        expect(gridCreator.getPan()).to.be.deep.equal(new Position(0.5, 0));
        expect(gridCreator.getZoom()).to.be.equal(1);

    });

});
