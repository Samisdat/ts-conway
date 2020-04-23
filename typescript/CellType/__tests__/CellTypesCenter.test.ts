import {CellTypesCenter} from '../CellTypesCenter';
import {COLOR_CENTER} from '../../Constants';

describe('CellTypesCenter', () => {

    let color: string = COLOR_CENTER;

    it('can be created', () => {

        let cellType = new CellTypesCenter(color);

        expect(cellType).toBeInstanceOf(CellTypesCenter);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypesCenter(color);

        expect(cellType.name).toBe('center');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypesCenter(color);

        expect(cellType.hex).toBe(color);

    });

});
