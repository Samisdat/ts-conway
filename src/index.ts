import './style.scss';

import { Frontend } from '../typescript/src/Frontend';

document.addEventListener("DOMContentLoaded", () => {

    new Frontend(
        document.getElementById('conway') as HTMLElement
    );

});
