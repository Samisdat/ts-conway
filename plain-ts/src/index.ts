import './style.scss';

import {Web} from '@Conway/Frontend/Web';
import {gunsAndEaters} from '@Conway/Pattern/Seed/guns_and_eaters';
import {CELL_WIDTH} from '@Conway/Constants';
import {MainControl} from '@Conway/Frontend/Control/ControlMain';

document.addEventListener('DOMContentLoaded', () => {

    const element = document.getElementById('conway') as HTMLElement;


    new Web(
        element,
        gunsAndEaters,
        new MainControl(
            element,
            CELL_WIDTH
        )
    );

});
