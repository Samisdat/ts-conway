import {CellUnkown} from '@Conway/Frontend/CellType/CellUnkown';

describe('CellUnkown', () => {

    test('can be created', () => {

        const cellType = new CellUnkown();

        expect(cellType).toBeInstanceOf(CellUnkown);

    });

    test('can retrieve name', () => {

        const cellType = new CellUnkown();

        expect(cellType.name).toBe('none');

    });

    test('can retrieve color', () => {

        const cellType = new CellUnkown;

        expect(cellType.hex).toBeUndefined;

    });

});
