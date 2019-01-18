import { CellTypeCheckerboardDark } from '@CellType/CellTypeCheckerboardDark';
import { CellTypeCheckerboardLight } from '@CellType/CellTypeCheckerboardLight';
import { CellTypeLiving } from '@CellType/CellTypeLiving';
import { CellTypesCenter } from 'CellType/CellTypesCenter';
import {Config} from '../Config';
import {CellTypeInterface} from '@CellType/CellTypeInterface';

/**
 * Not a real sensefull usecase for this design, just try singleton in typescript ;)
 */
export class CellTypesFactory {

    private static instance: CellTypesFactory;

    private readonly cellTypeCheckerboardDark: CellTypeCheckerboardDark;

    private readonly cellTypeCheckerboardLight: CellTypeCheckerboardLight;

    private readonly cellTypeLiving: CellTypeLiving;

    private readonly cellTypesCenter: CellTypesCenter;

    private constructor() {

        this.cellTypeCheckerboardDark = new CellTypeCheckerboardDark(Config.colorCheckerboardDark);
        this.cellTypeCheckerboardLight = new CellTypeCheckerboardLight(Config.colorCheckerboardLight);
        this.cellTypeLiving = new CellTypeLiving(Config.colorLiving);
        this.cellTypesCenter = new CellTypesCenter(Config.colorCenter);

    }

    public static get(): CellTypesFactory {

        if (undefined === this.instance) {

            this.instance = new this();

        }

        return this.instance;

    }

    public checkerboardDark(): CellTypeInterface {

        return this.cellTypeCheckerboardDark;

    }

    public checkerboardLight(): CellTypeInterface {


        return this.cellTypeCheckerboardLight;

    }

    public living(): CellTypeInterface {


        return this.cellTypeLiving;

    }



    public center(): CellTypeInterface {


        return this.cellTypesCenter;

    }

}