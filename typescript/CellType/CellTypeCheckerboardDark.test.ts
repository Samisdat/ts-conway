import { expect } from 'chai';

import { CellTypeCheckerboardDark } from 'CellType/CellTypeCheckerboardDark';
import {Config} from '../Config';

describe('CellTypeCheckerboardDark', () => {

    let color: string = Config.colorCheckerboardDark;

    it('can be created', () => {

        let cellType = new CellTypeCheckerboardDark(color);

        expect(cellType).to.be.instanceof(CellTypeCheckerboardDark);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeCheckerboardDark(color);

        expect(cellType.name).to.be.equal('checkerboard-dark');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeCheckerboardDark(color);

        expect(cellType.hex).to.be.equal(color);

    });

});
