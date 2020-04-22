import { expect } from 'chai';

import { Position } from 'Conway/position';
import { Cell } from 'Conway/cell';

import { LivingCell }  from 'Conway/livingcell';

describe('LivingCell', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let cell = new LivingCell(
            new Position(1, 2)
        );

        expect(cell).toBeInstanceOf(LivingCell);
        expect(cell).toBeInstanceOf(Cell);

    });

    it('is alive', () => {

        let cell = new LivingCell(
            new Position(1, 2)
        );

        expect(cell.isAlive()).to.be.true;

    });

});
