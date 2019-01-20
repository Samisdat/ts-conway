import { expect } from 'chai';

import { CellTypesCenter } from 'CellType/CellTypesCenter';

import {CellTypesFactory} from 'CellType/CellTypesFactory';
import {CellTypeCheckerboardDark} from 'CellType/CellTypeCheckerboardDark';
import {CellTypeCheckerboardLight} from 'CellType/CellTypeCheckerboardLight';
import {CellTypeLiving} from 'CellType/CellTypeLiving';

describe('CellTypesFactory', () => {

    let color: string;

    before(() => {

    });


    it('can get factory instance', () => {

        expect(CellTypesFactory.get()).to.be.instanceOf(CellTypesFactory);

    });

    it('can retrieve a dark checkerboard type', () => {

        expect(CellTypesFactory.get().checkerboardDark()).to.be.instanceOf(CellTypeCheckerboardDark);

    });

    it('can retrieve a light checkerboard type', () => {

        expect(CellTypesFactory.get().checkerboardLight()).to.be.instanceOf(CellTypeCheckerboardLight);

    });

    it('can retrieve a light living type', () => {

        expect(CellTypesFactory.get().living()).to.be.instanceOf(CellTypeLiving);

    });

    it('can retrieve a center checkerboard type', () => {

        expect(CellTypesFactory.get().center()).to.be.instanceOf(CellTypesCenter);

    });

});
