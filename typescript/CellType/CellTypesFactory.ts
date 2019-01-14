import { CellTypeCheckerboardDark } from 'CellType/CellTypeCheckerboardDark';
import { CellTypeCheckerboardLight } from 'CellType/CellTypeCheckerboardLight';
import { CellTypeLiving } from 'CellType/CellTypeLiving';
import { CellTypesCenter } from 'CellType/CellTypesCenter';
import {Config} from '../Config';
import {CellTypeInterface} from 'CellType/CellTypeInterface';

/**
 * Not a real sensfull usecase, but try singleton in typescript ;)
 */
export class CellTypesFactory{

    private static instance:CellTypesFactory;

    private readonly cellTypeCheckerboardDark: CellTypeCheckerboardDark;

    private readonly cellTypeCheckerboardLight:CellTypeCheckerboardLight;

    private readonly cellTypeLiving:CellTypeLiving;

    private readonly cellTypesCenter:CellTypesCenter;

    private constructor(){

        this.cellTypeCheckerboardDark = new CellTypeCheckerboardDark(Config.colorCheckerboardDark);
        this.cellTypeCheckerboardLight = new CellTypeCheckerboardDark(Config.colorCheckerboardLight);
        this.cellTypeLiving = new CellTypeLiving(Config.colorLiving);
        this.cellTypesCenter = new CellTypesCenter(Config.colorCenter);

    }

    public static checkerboardDark():CellTypeInterface{

        if(undefined === this.instance){

            this.instance = new this();
        }

        return this.instance.cellTypeCheckerboardDark;

    }

    public static checkerboardLight():CellTypeInterface{

        if(undefined === this.instance){

            this.instance = new this();
        }

        return this.instance.cellTypeCheckerboardLight;

    }

    public static living():CellTypeInterface{

        if(undefined === this.instance){

            this.instance = new this();
        }

        return this.instance.cellTypeLiving;

    }



    public static center():CellTypeInterface{

        if(undefined === this.instance){

            this.instance = new this();
        }

        return this.instance.cellTypesCenter;

    }

}