import {Config} from '../../Config';
import {CellTypesCenter} from '../CellTypesCenter';

describe('CellTypesCenter', () => {

    let color: string = Config.colorCenter;

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
