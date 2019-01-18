import { expect } from 'chai';

import { CellUnkown } from '@CellType/CellUnkown';

describe('CellUnkown', () => {

    it('can be created', () => {

        let cellType = new CellUnkown;

        expect(cellType).to.be.instanceof(CellUnkown);

    });

    it('can retrieve name', () => {

        let cellType = new CellUnkown;

        expect(cellType.name).to.be.equal('none');

    });

    it('can retrieve color', () => {

        let cellType = new CellUnkown;

        expect(cellType.hex).to.be.undefined;

    });

});
