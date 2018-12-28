import { expect } from 'chai';

import CellCheckerboardDark from '@cell/CellCheckerboardDark';

describe('CellCheckerboardDark', () => {

    it('can be created', () => {

        let cellType = new CellCheckerboardDark;

        expect(cellType).to.be.instanceof(CellCheckerboardDark);

    });

    it('can retrieve name', () => {

        let cellType = new CellCheckerboardDark;

        expect(cellType.name).to.be.equal('checkerboard-dark');

    });

    it('can retrieve color', () => {

        let cellType = new CellCheckerboardDark;

        expect(cellType.hex).to.be.equal('#D46A6A');

    });

})
