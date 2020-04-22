import {Config} from '../../Config';
import {CellTypeCheckerboardLight} from '../CellTypeCheckerboardLight';

describe('CellTypeCheckerboardLight', () => {

    let color: string = Config.colorCheckerboardLight;

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
