import { expect } from 'chai';

import { CellTypesCenter } from '@CellType/CellTypesCenter';
import {Config} from '../Config';

describe('CellTypesCenter', () => {

    let color: string = Config.colorCenter;

    it('can be created', () => {

        let cellType = new CellTypesCenter(color);

        expect(cellType).to.be.instanceof(CellTypesCenter);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypesCenter(color);

        expect(cellType.name).to.be.equal('center');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypesCenter(color);

        expect(cellType.hex).to.be.equal(color);

    });

});
