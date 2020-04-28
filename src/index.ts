import './style.scss';

import { Web } from '../typescript/Frontend/Web';
import {NoControl} from '../typescript/Control/ControlNo';

document.addEventListener('DOMContentLoaded', () => {

    new Web(
        document.getElementById('conway') as HTMLElement,
        new NoControl()
    );

});
