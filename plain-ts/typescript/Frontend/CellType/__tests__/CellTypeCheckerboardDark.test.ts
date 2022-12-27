import {COLOR_CHECKERBOARD_DARK} from '@Conway/Constants';
import {CellTypeCheckerboardDark} from '@Conway/Frontend/CellType/CellTypeCheckerboardDark';

describe('CellTypeCheckerboardDark', () => {

    const color: string = COLOR_CHECKERBOARD_DARK;

    test('can be created', () => {

        const cellType = new CellTypeCheckerboardDark(color);

        expect(cellType).toBeInstanceOf(CellTypeCheckerboardDark);

    });

    test('can retrieve name', () => {

        const cellType = new CellTypeCheckerboardDark(color);

        expect(cellType.name).toBe('checkerboard-dark');

    });

    test('can retrieve color', () => {

        const cellType = new CellTypeCheckerboardDark(color);

        expect(cellType.hex).toBe(color);

    });

});
