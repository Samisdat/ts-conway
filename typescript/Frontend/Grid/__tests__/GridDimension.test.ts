import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';

describe('GridDimension', () => {

    test('can be created', () => {

        const gridDimension = new GridDimension(2, 3);

        expect(gridDimension).toBeInstanceOf(GridDimension);

    });


    test('rows can be retrieved', () => {

        const gridDimension = new GridDimension(2, 3);

        expect(gridDimension.rows).toBe(2);

    });

    test('cols can be retrieved', () => {

        const gridDimension = new GridDimension(2, 3);

        expect(gridDimension.cols).toBe(3);

    });

    test('throw execption for rows value less then 1', () => {

        expect(() => {
            new GridDimension(0, 3);
        }).toThrowErrorMatchingSnapshot();

        expect(() => {
            new GridDimension(-1, 3);
        }).toThrowErrorMatchingSnapshot();

    });

    test('throw exception for cols value less then 1', () => {

        expect(() => {
            new GridDimension(3, 0);
        }).toThrowErrorMatchingSnapshot();

        expect(() => {
            new GridDimension(3, -1);
        }).toThrowErrorMatchingSnapshot();

    });

});
