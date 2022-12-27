import {Dimension} from '@Conway/Habitat/Dimension';

describe('Dimension', () => {

    test('can be created', () => {

        const dimension = new Dimension(2, 3);

        expect(dimension).toBeInstanceOf(Dimension);

    });


    test('getRows() can be retrieved', () => {

        const dimension = new Dimension(2, 3);

        expect(dimension.getRows()).toBe(2);

    });

    test('getCols() can be retrieved', () => {

        const dimension = new Dimension(2, 3);

        expect(dimension.getCols()).toBe(3);

    });

    test('throw execption for getRows() value less then 1', () => {

        expect(() => {
            new Dimension(0, 3);
        }).toThrowErrorMatchingSnapshot();

        expect(() => {
            new Dimension(-1, 3);
        }).toThrowErrorMatchingSnapshot();

    });

    test('throw exception for getCols() value less then 1', () => {

        expect(() => {
            new Dimension(3, 0);
        }).toThrowErrorMatchingSnapshot();

        expect(() => {
            new Dimension(3, -1);
        }).toThrowErrorMatchingSnapshot();

    });

});
