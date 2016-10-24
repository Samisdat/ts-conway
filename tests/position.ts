/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import { expect } from 'chai';

import Position from '../lib/position';

describe('Position', () => {

    it('can be created', () => {

        let position =  new Position(1, 2);

        expect(position).to.be.instanceof(Position);        

    });

    it('x and y are correct', () => {

        let position =  new Position(1, 2);

        expect(position.x).to.be.equal(1);        
        expect(position.y).to.be.equal(2);        

    });

});
