import { expect } from 'chai';

import CellCenter from '@cell/CellCenter';

describe('CellCenter', () => {

    it('can be created', () => {

        let cellType = new CellCenter;

        expect(cellType).to.be.instanceof(CellCenter);

    });

    it('can retrieve name', () => {

        let cellType = new CellCenter;

        expect(cellType.name).to.be.equal('center');

    });

    it('can retrieve color', () => {

        let cellType = new CellCenter;

        expect(cellType.hex).to.be.equal('#ff0000');

    });

})
