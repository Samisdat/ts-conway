import {COLOR_CENTER} from '@Conway/Constants';
import {CellTypesCenter} from '@Conway/Frontend/CellType/CellTypesCenter';

describe('CellTypesCenter', () => {

    const color: string = COLOR_CENTER;

    test('can be created', () => {

        const cellType = new CellTypesCenter(color);

        expect(cellType).toBeInstanceOf(CellTypesCenter);

    });

    test('can retrieve name', () => {

        const cellType = new CellTypesCenter(color);

        expect(cellType.name).toBe('center');

    });

    test('can retrieve color', () => {

        const cellType = new CellTypesCenter(color);

        expect(cellType.hex).toBe(color);

    });

});
