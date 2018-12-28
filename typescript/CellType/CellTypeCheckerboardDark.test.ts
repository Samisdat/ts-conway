import { expect } from 'chai';

import { CellTypeCheckerboardDark } from 'CellType/CellTypeCheckerboardDark';

describe('CellTypeCheckerboardDark', () => {

    it('can be created', () => {

        let cellType = new CellTypeCheckerboardDark;

        expect(cellType).to.be.instanceof(CellTypeCheckerboardDark);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeCheckerboardDark;

        expect(cellType.name).to.be.equal('checkerboard-dark');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeCheckerboardDark;

        expect(cellType.hex).to.be.equal('#D46A6A');

    });

})
