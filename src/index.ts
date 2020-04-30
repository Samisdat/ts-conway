import './style.scss';

import { Web } from '../typescript/Frontend/Web';
import {NoControl} from '../typescript/Control/ControlNo';
import {guns_and_eaters} from '../typescript/Seed/guns_and_eaters';
import {MainControl} from '../typescript/Control/ControlMain';
import {CELL_WIDTH} from '../typescript/Constants';


document.addEventListener('DOMContentLoaded', () => {

    const element = document.getElementById('conway') as HTMLElement;

    new Web(
        element,
        guns_and_eaters,
        new NoControl()
    );

});
