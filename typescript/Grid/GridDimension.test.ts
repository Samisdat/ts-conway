import { expect } from 'chai';

import {GridDimension} from 'Grid/GridDimension';


describe('GridDimension', () => {

    it('can be created', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension).to.be.instanceof(GridDimension);

    });


    it('rows can be retrieved', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension.rows).to.be.equal(2);

    });

    it('cols can be retrieved', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension.cols).to.be.equal(3);

    });

    it('throw execption for rows value less then 1', () => {

        expect(() => {
            new GridDimension(0, 3);
        }).to.throw(
            Error, 'rows must be at least 1'
        );

        expect(() => {
            new GridDimension(-1, 3);
        }).to.throw(
            Error, 'rows must be at least 1'
        );

    });

    it('throw execption for cols value less then 1', () => {

        expect(() => {
            new GridDimension(3, 0);
        }).to.throw(
            Error, 'cols must be at least 1'
        );

        expect(() => {
            new GridDimension(3, -1);
        }).to.throw(
            Error, 'cols must be at least 1'
        );

    });


});
