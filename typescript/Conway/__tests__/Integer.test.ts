import {Integer} from '../Integer';

describe('Integer', () => {

    it('can be created', () => {

        let integer = new Integer(1);

        expect(integer).toBeInstanceOf(Integer);

    });

    it('value can be retrieved', () => {

        let integer = new Integer(1);

        expect(integer.value).toBe(1);

    });

    it('throw execption for rows with decimal value', () => {

        expect(() => {
            new Integer(0.5);
        }).toThrowErrorMatchingSnapshot();

    });

});
