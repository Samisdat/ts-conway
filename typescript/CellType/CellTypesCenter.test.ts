import { expect } from 'chai';

import { CellTypesCenter } from 'CellType/CellTypesCenter';

describe('CellTypesCenter', () => {

    it('can be created', () => {

        let cellType = new CellTypesCenter;

        expect(cellType).to.be.instanceof(CellTypesCenter);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypesCenter;

        expect(cellType.name).to.be.equal('center');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypesCenter;

        expect(cellType.hex).to.be.equal('#ff0000');

    });

});
