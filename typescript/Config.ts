import {expect} from 'chai';
import {GridDimension} from 'Grid/GridDimension';

export class Config {

    public readonly htmlId: string;

    public readonly cellWidth: number;

    public readonly generationDuration;

    public readonly debug: boolean;

    public readonly colorCheckerboardDark: string;

    public readonly colorCheckerboardLight: string;

    public readonly colorLiving: string;

    public readonly colorCenter: string;

    constructor(rawConfig: any =  {}) {

        if (undefined !== rawConfig.htmlId) {

            this.htmlId = rawConfig.htmlId + '';

        }
        else {

            throw new Error('htmlId is mandatory');

        }

        if (undefined !== rawConfig.cellWidth) {

            this.cellWidth = parseInt(rawConfig.cellWidth);

        }
        else {

            this.cellWidth = 50;

        }

        if (undefined !== rawConfig.generationDuration) {

            this.generationDuration = parseInt(rawConfig.generationDuration, 10);

        }
        else {

            this.generationDuration = 500;

        }

        if (undefined !== rawConfig.debug) {

            this.debug = (true === rawConfig.debug) ? true : false;

        }
        else {

            this.debug = false;

        }

        if (undefined !== rawConfig.colorCheckerboardDark) {

            this.colorCheckerboardDark = rawConfig.colorCheckerboardDark + '';

        }
        else {

            this.colorCheckerboardDark = '#DFD2AE';

        }

        if (undefined !== rawConfig.colorCheckerboardLight) {

            this.colorCheckerboardLight = rawConfig.colorCheckerboardLight + '';

        }
        else {

            this.colorCheckerboardLight = '#EBE3CD';

        }

        if (undefined !== rawConfig.colorLiving) {

            this.colorLiving = rawConfig.colorLiving + '';

        }
        else {

            this.colorLiving = '#DB8555';

        }

        if (undefined !== rawConfig.colorCenter) {

            this.colorCenter = rawConfig.colorCenter + '';

        }
        else {

            this.colorCenter = '#ff0000';

        }


    }

}