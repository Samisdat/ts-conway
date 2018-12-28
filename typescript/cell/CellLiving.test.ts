import { expect } from 'chai';

import CellLiving from '@cell/CellLiving';

describe('CellLiving', () => {

    it('can be created', () => {

        let cellType = new CellLiving;

        expect(cellType).to.be.instanceof(CellLiving);

    });

    it('can retrieve name', () => {

        let cellType = new CellLiving;

        expect(cellType.name).to.be.equal('living');

    });

    it('can retrieve color', () => {

        let cellType = new CellLiving;

        expect(cellType.hex).to.be.equal('#000000');

    });

})
