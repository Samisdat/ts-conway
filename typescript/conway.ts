import * as $ from 'jquery';

import { Frontend } from './Frontend';
import {Config} from './Config';

$(document).ready(function() {

    const config = new Config(
        '#conway',
        10,
        300
    );

    new Frontend(config);

});
