import { expect } from 'chai';

import CellCheckerboardLight from '@cell/CellCheckerboardLight';

describe('CellCheckerboardLight', () => {

    it('can be created', () => {

        let cellType = new CellCheckerboardLight;

        expect(cellType).to.be.instanceof(CellCheckerboardLight);

    });

    it('can retrieve name', () => {

        let cellType = new CellCheckerboardLight;

        expect(cellType.name).to.be.equal('checkerboard-light');

    });

    it('can retrieve color', () => {

        let cellType = new CellCheckerboardLight;

        expect(cellType.hex).to.be.equal('#FFAAAA');

    });

})
