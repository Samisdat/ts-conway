import {Config} from '../../Config';
import {CellTypeCheckerboardDark} from '../CellTypeCheckerboardDark';

describe('CellTypeCheckerboardDark', () => {

    let color: string = Config.colorCheckerboardDark;

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
