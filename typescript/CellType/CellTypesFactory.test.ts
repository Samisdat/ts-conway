import { expect } from 'chai';

import { CellTypesCenter } from 'CellType/CellTypesCenter';

import {CellTypesFactory} from 'CellType/CellTypesFactory';

describe('CellTypesFactory', () => {

    let color: string;

    before(() => {

    });


    it('can retrieve a dark checkerboard type', () => {


        console.log(CellTypesFactory.checkerboardDark());
        console.log(CellTypesFactory.checkerboardDark());
        console.log(CellTypesFactory.checkerboardDark());

    });



});
