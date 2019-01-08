import { expect } from 'chai';

import {GridDimension} from 'Grid/GridDimension';


describe('GridDimension', () => {

    it('can be created', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension).to.be.instanceof(GridDimension);

    });




});
