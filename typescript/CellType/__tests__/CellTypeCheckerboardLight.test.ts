
import {CellTypeCheckerboardLight} from '../CellTypeCheckerboardLight';
import {COLOR_CHECKERBOARD_LIGHT} from '../../Constants';

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
