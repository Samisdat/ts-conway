import { expect } from 'chai';

import {GridCreator} from 'Grid/GridCreator';
import {Position} from '../position';


describe('GridCreator', () => {

    it('can be created', () => {

        let gridCreator = new GridCreator(
            200,
            200,
            100,
            new Position(0,0)
        );

        expect(gridCreator).to.be.instanceof(GridCreator);

    });

    it('create an easy case', () => {

        let gridCreator = new GridCreator(
            100,
            100,
            100,
            new Position(0,0)
        );

        expect(gridCreator.getRows()).to.be.equal(1);
        expect(gridCreator.getCols()).to.be.equal(1);
        expect(gridCreator.getPan()).to.be.deep.equal(new Position(0, 0));

    });

});
