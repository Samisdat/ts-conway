import {CellTypesFactory} from '@Conway/CellType/CellTypesFactory';
import {CellTypeCheckerboardDark} from '@Conway/CellType/CellTypeCheckerboardDark';
import {CellTypeCheckerboardLight} from '@Conway/CellType/CellTypeCheckerboardLight';
import {CellTypeLiving} from '@Conway/CellType/CellTypeLiving';
import {CellTypesCenter} from '@Conway/CellType/CellTypesCenter';

describe('CellTypesFactory', () => {

    let color: string;

    it('can get factory instance', () => {

        expect(CellTypesFactory.get()).toBeInstanceOf(CellTypesFactory);

    });

    it('can retrieve a dark checkerboard type', () => {

        expect(CellTypesFactory.get().checkerboardDark()).toBeInstanceOf(CellTypeCheckerboardDark);

    });

    it('can retrieve a light checkerboard type', () => {

        expect(CellTypesFactory.get().checkerboardLight()).toBeInstanceOf(CellTypeCheckerboardLight);

    });

    it('can retrieve a light living type', () => {

        expect(CellTypesFactory.get().living()).toBeInstanceOf(CellTypeLiving);

    });

    it('can retrieve a center checkerboard type', () => {

        expect(CellTypesFactory.get().center()).toBeInstanceOf(CellTypesCenter);

    });

});
