import {COLOR_LIVING} from '@Conway/Constants';
import {CellTypeLiving} from '@Conway/Frontend/CellType/CellTypeLiving';

describe('CellTypeLiving', () => {

    const color: string = COLOR_LIVING;

    test('can be created', () => {

        const cellType = new CellTypeLiving(color);

        expect(cellType).toBeInstanceOf(CellTypeLiving);

    });

    test('can retrieve name', () => {

        const cellType = new CellTypeLiving(color);

        expect(cellType.name).toBe('living');

    });

    test('can retrieve color', () => {

        const cellType = new CellTypeLiving(color);

        expect(cellType.hex).toBe(color);

    });

});
