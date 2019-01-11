import { expect } from 'chai';

import { Position } from './position';
import {IntegerPosition} from './IntegerPosition';
import {Integer} from './Integer';

describe('IntegerPosition', () => {

    it('can be created', () => {

        let position = new IntegerPosition(1, 2);

        expect(position).to.be.instanceof(Position);

    });

    it('throw execption for x with decimal value', () => {

        expect(() => {
            new IntegerPosition(0.5, 1);
        }).to.throw(
            Error, 'not an integer value'
        );

    });

    it('throw execption for y with decimal value', () => {

        expect(() => {
            new IntegerPosition(1, 0.5);
        }).to.throw(
            Error, 'not an integer value'
        );

    });

    it('clone', () => {

        let position = new IntegerPosition(1, 2);

        let cloned = position.clone();

        expect(cloned).to.be.instanceof(IntegerPosition);

        expect(cloned.x).to.be.equal(1);
        expect(cloned.y).to.be.equal(2);


    });


});
