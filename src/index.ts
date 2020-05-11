import './style.scss';

import {Web} from '@Conway/Frontend/Web';
import {MainControl} from '@Conway/Control/ControlMain';
import {CELL_WIDTH} from '@Conway/Constants';
import {gunsAndEaters} from '@Conway/Seed/guns_and_eaters';
import {scholar} from '@Conway/Seed/scholar';
import {NoControl} from '@Conway/Control/ControlNo';


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
        scholar,
        new MainControl(
            element,
            CELL_WIDTH
        )
    );

});
