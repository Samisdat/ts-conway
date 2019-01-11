import { expect } from 'chai';

import { CellTypeCheckerboardDark } from 'CellType/CellTypeCheckerboardDark';
import {Config} from '../Config';

describe('CellTypeCheckerboardDark', () => {

    let color: string;

    before(() => {

        const config = new Config({
            'htmlId': 'foo'
        });

        color = config.colorCheckerboardDark;

    });

    it('can be created', () => {

        let config = new Config({
            'htmlId': 'foo'
        });


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
