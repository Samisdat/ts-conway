import './style.scss';

import {Web} from '@Conway/Frontend/Web';
import {MainControl} from '@Conway/Control/ControlMain';
import {CELL_WIDTH} from '@Conway/Constants';
import {gunsAndEaters} from '@Conway/Seed/guns_and_eaters';
import {NoControl} from '@Conway/Control/ControlNo';
import {scholarSeed} from '@Conway/Seed/scholarSeed';


document.addEventListener('DOMContentLoaded', () => {

    const element = document.getElementById('conway') as HTMLElement;

    /*
    new Web(
        element,
        guns_and_eaters,
        new NoControl()
    );
    */

    new Web(
        element,
        scholarSeed,
        new MainControl(
            element,
            CELL_WIDTH
        )
    );

});
