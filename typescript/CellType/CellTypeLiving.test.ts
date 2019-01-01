import { expect } from 'chai';

import { CellTypeLiving } from 'CellType/CellTypeLiving';

describe('CellTypeLiving', () => {

    it('can be created', () => {

        let cellType = new CellTypeLiving;

        expect(cellType).to.be.instanceof(CellTypeLiving);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeLiving;

        expect(cellType.name).to.be.equal('living');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeLiving;

        expect(cellType.hex).to.be.equal('#000000');

    });

})
