import {CellTypesFactory} from '@Conway/Frontend/CellType/CellTypesFactory';
import {CellTypeCheckerboardDark} from '@Conway/Frontend/CellType/CellTypeCheckerboardDark';
import {CellTypeCheckerboardLight} from '@Conway/Frontend/CellType/CellTypeCheckerboardLight';
import {CellTypeLiving} from '@Conway/Frontend/CellType/CellTypeLiving';
import {CellTypesCenter} from '@Conway/Frontend/CellType/CellTypesCenter';

describe('CellTypesFactory', () => {

    let color: string;

    test('can get factory instance', () => {

        expect(CellTypesFactory.get()).toBeInstanceOf(CellTypesFactory);

    });

    test('can retrieve a dark checkerboard type', () => {

        expect(CellTypesFactory.get().checkerboardDark()).toBeInstanceOf(CellTypeCheckerboardDark);

    });

    test('can retrieve a light checkerboard type', () => {

        expect(CellTypesFactory.get().checkerboardLight()).toBeInstanceOf(CellTypeCheckerboardLight);

    });

    test('can retrieve a light living type', () => {

        expect(CellTypesFactory.get().living()).toBeInstanceOf(CellTypeLiving);

    });

    test('can retrieve a center checkerboard type', () => {

        expect(CellTypesFactory.get().center()).toBeInstanceOf(CellTypesCenter);

    });

});
