import './style.scss';

import { Frontend } from '../typescript/src/Frontend';
import {NoControl} from '../typescript/Control/ControlNo';

document.addEventListener('DOMContentLoaded', () => {

    new Frontend(
        document.getElementById('conway') as HTMLElement,
        new NoControl()
    );

});
