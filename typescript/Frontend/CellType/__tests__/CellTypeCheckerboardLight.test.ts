import {COLOR_CHECKERBOARD_LIGHT} from '@Conway/Constants';
import {CellTypeCheckerboardLight} from '@Conway/Frontend/CellType/CellTypeCheckerboardLight';

describe('CellTypeCheckerboardLight', () => {

    const color: string = COLOR_CHECKERBOARD_LIGHT;

    test('can be created', () => {

        const cellType = new CellTypeCheckerboardLight(color);

        expect(cellType).toBeInstanceOf(CellTypeCheckerboardLight);

    });

    test('can retrieve name', () => {

        const cellType = new CellTypeCheckerboardLight(color);

        expect(cellType.name).toBe('checkerboard-light');

    });

    test('can retrieve color', () => {

        const cellType = new CellTypeCheckerboardLight(color);

        expect(cellType.hex).toBe(color);

    });

});
