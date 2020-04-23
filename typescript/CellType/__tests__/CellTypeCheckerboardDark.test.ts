import {CellTypeCheckerboardDark} from '../CellTypeCheckerboardDark';
import {COLOR_CHECKERBOARD_DARK} from '../../Constants';

describe('CellTypeCheckerboardDark', () => {

    let color: string = COLOR_CHECKERBOARD_DARK;

    it('can be created', () => {

        let cellType = new CellTypeCheckerboardDark(color);

        expect(cellType).toBeInstanceOf(CellTypeCheckerboardDark);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeCheckerboardDark(color);

        expect(cellType.name).toBe('checkerboard-dark');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeCheckerboardDark(color);

        expect(cellType.hex).toBe(color);

    });

});
