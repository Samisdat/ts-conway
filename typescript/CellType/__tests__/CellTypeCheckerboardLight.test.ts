import {COLOR_CHECKERBOARD_LIGHT} from '@Conway/Constants';
import {CellTypeCheckerboardLight} from '@Conway/CellType/CellTypeCheckerboardLight';

describe('CellTypeCheckerboardLight', () => {

    let color: string = COLOR_CHECKERBOARD_LIGHT;

    it('can be created', () => {

        let cellType = new CellTypeCheckerboardLight(color);

        expect(cellType).toBeInstanceOf(CellTypeCheckerboardLight);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeCheckerboardLight(color);

        expect(cellType.name).toBe('checkerboard-light');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeCheckerboardLight(color);

        expect(cellType.hex).toBe(color);

    });

});
