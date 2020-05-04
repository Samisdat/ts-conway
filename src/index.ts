import './style.scss';

import {Web} from '@Conway/Frontend/Web';
import {MainControl} from '@Conway/Control/ControlMain';
import {CELL_WIDTH} from '@Conway/Constants';
import {guns_and_eaters} from '@Conway/Seed/guns_and_eaters';


document.addEventListener('DOMContentLoaded', () => {

    const element = document.getElementById('conway') as HTMLElement;

    new Web(
        element,
        guns_and_eaters,
        new MainControl(
            element,
            CELL_WIDTH
        )
    );

});
