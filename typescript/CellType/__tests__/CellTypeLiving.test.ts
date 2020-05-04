import {COLOR_LIVING} from '@Conway/Constants';
import {CellTypeLiving} from '@Conway/CellType/CellTypeLiving';

describe('CellTypeLiving', () => {

    let color: string = COLOR_LIVING;

    it('can be created', () => {

        let cellType = new CellTypeLiving(color);

        expect(cellType).toBeInstanceOf(CellTypeLiving);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeLiving(color);

        expect(cellType.name).toBe('living');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeLiving(color);

        expect(cellType.hex).toBe(color);

    });

});
