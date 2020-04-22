import {CellTypesFactory} from '../CellTypesFactory';
import {CellTypeCheckerboardDark} from '../CellTypeCheckerboardDark';
import {CellTypeCheckerboardLight} from '../CellTypeCheckerboardLight';
import {CellTypeLiving} from '../CellTypeLiving';
import {CellTypesCenter} from '../CellTypesCenter';

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
