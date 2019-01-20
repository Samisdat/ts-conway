import { expect } from 'chai';

import {Integer} from 'Conway/Integer';

describe('Integer', () => {

    it('can be created', () => {

        let integer = new Integer(1);

        expect(integer).to.be.instanceof(Integer);

    });

    it('value can be retrieved', () => {

        let integer = new Integer(1);

        expect(integer.value).to.be.equal(1);

    });

    it('throw execption for rows with decimal value', () => {

        expect(() => {
            new Integer(0.5);
        }).to.throw(
            Error, 'not an integer value'
        );

    });

});
