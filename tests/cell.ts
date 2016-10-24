/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import { expect } from 'chai';

import Position from '../lib/position';

import Cell from '../lib/cell';

describe('Cell', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let cell =  new Cell(
            new Position(1, 2)
        );

        expect(cell).to.be.instanceof(Cell);        

    });



});
