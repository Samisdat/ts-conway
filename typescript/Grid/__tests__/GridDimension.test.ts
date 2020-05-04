import {GridDimension} from '@Conway/Grid/GridDimension';

describe('GridDimension', () => {

    it('can be created', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension).toBeInstanceOf(GridDimension);

    });


    it('rows can be retrieved', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension.rows).toBe(2);

    });

    it('cols can be retrieved', () => {

        let gridDimension = new GridDimension(2, 3);

        expect(gridDimension.cols).toBe(3);

    });

    it('throw execption for rows value less then 1', () => {

        expect(() => {
            new GridDimension(0, 3);
        }).toThrowErrorMatchingSnapshot();

        expect(() => {
            new GridDimension(-1, 3);
        }).toThrowErrorMatchingSnapshot();

    });

    it('throw execption for cols value less then 1', () => {

        expect(() => {
            new GridDimension(3, 0);
        }).toThrowErrorMatchingSnapshot();

        expect(() => {
            new GridDimension(3, -1);
        }).toThrowErrorMatchingSnapshot();

    });

});
