import { expect } from 'chai';

import { CellTypeLiving } from 'CellType/CellTypeLiving';
import {Config} from '../Config';

describe('CellTypeLiving', () => {

    let color: string= Config.colorLiving;

    it('can be created', () => {

        let cellType = new CellTypeLiving(color);

        expect(cellType).to.be.instanceof(CellTypeLiving);

    });

    it('can retrieve name', () => {

        let cellType = new CellTypeLiving(color);

        expect(cellType.name).to.be.equal('living');

    });

    it('can retrieve color', () => {

        let cellType = new CellTypeLiving(color);

        expect(cellType.hex).to.be.equal(color);

    });

});
