/**
 * Not a real sensefull usecase for this design, just try singleton in typescript ;)
 */
import {COLOR_CENTER, COLOR_CHECKERBOARD_DARK, COLOR_CHECKERBOARD_LIGHT, COLOR_LIVING} from '@Conway/Constants';
import {CellTypeCheckerboardDark} from '@Conway/Frontend/CellType/CellTypeCheckerboardDark';
import {CellTypeCheckerboardLight} from '@Conway/Frontend/CellType/CellTypeCheckerboardLight';
import {CellTypeLiving} from '@Conway/Frontend/CellType/CellTypeLiving';
import {CellTypesCenter} from '@Conway/Frontend/CellType/CellTypesCenter';
import {CellType} from '@Conway/Frontend/CellType/CellType';

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

    public checkerboardDark(): CellType {

        return this.cellTypeCheckerboardDark;

    }

    public checkerboardLight(): CellType {


        return this.cellTypeCheckerboardLight;

    }

    public living(): CellType {


        return this.cellTypeLiving;

    }



    public center(): CellType {


        return this.cellTypesCenter;

    }

}
