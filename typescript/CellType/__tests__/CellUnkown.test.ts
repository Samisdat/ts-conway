import {CellUnkown} from '../CellUnkown';

describe('CellUnkown', () => {

    it('can be created', () => {

        let cellType = new CellUnkown();

        expect(cellType).toBeInstanceOf(CellUnkown);

    });

    it('can retrieve name', () => {

        let cellType = new CellUnkown();

        expect(cellType.name).toBe('none');

    });

    it('can retrieve color', () => {

        let cellType = new CellUnkown;

        expect(cellType.hex).toBeUndefined;

    });

});
