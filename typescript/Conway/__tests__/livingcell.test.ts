import {LivingCell} from '../livingcell';
import {Position} from '../position';
import {Cell} from '../cell';

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

        expect(cell.isAlive()).toBeTruthy;

    });

});
