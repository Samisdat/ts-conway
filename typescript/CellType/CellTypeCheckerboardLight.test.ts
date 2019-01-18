import { expect } from 'chai';

import { CellTypeCheckerboardLight } from '@CellType/CellTypeCheckerboardLight';
import {Config} from '../Config';

describe('CellTypeCheckerboardLight', () => {

    let color: string = Config.colorCheckerboardLight;

    it('can be created', () => {

        let cellType = new CellTypeCheckerboardLight(color);

        expect(cellType).to.be.instanceof(CellTypeCheckerboardLight);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeCheckerboardLight(color);

        expect(cellType.name).to.be.equal('checkerboard-light');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeCheckerboardLight(color);

        expect(cellType.hex).to.be.equal(color);

    });

});
