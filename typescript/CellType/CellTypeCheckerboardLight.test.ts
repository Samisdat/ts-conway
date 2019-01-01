import { expect } from 'chai';

import { CellTypeCheckerboardLight } from '@CellType/CellTypeCheckerboardLight';

describe('CellTypeCheckerboardLight', () => {

    it('can be created', () => {

        let cellType = new CellTypeCheckerboardLight;

        expect(cellType).to.be.instanceof(CellTypeCheckerboardLight);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeCheckerboardLight;

        expect(cellType.name).to.be.equal('checkerboard-light');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeCheckerboardLight;

        expect(cellType.hex).to.be.equal('#FFAAAA');

    });

})
