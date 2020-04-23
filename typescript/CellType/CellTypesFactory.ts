import { CellTypeCheckerboardDark } from './CellTypeCheckerboardDark';
import { CellTypeCheckerboardLight } from './CellTypeCheckerboardLight';
import { CellTypeLiving } from './CellTypeLiving';
import { CellTypesCenter } from './CellTypesCenter';
import {CellTypeInterface} from './CellTypeInterface';
import {COLOR_CENTER, COLOR_CHECKERBOARD_DARK, COLOR_CHECKERBOARD_LIGHT, COLOR_LIVING} from '../Constants';

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

        this.cellTypeCheckerboardDark = new CellTypeCheckerboardDark(COLOR_CHECKERBOARD_DARK);
        this.cellTypeCheckerboardLight = new CellTypeCheckerboardLight(COLOR_CHECKERBOARD_LIGHT);
        this.cellTypeLiving = new CellTypeLiving(COLOR_LIVING);
        this.cellTypesCenter = new CellTypesCenter(COLOR_CENTER);

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
