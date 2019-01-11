import * as $ from 'jquery';

import { Frontend } from './src/Frontend';
import { Config } from './Config';

$(document).ready(function() {

    const  config = new Config({
        'htmlId': '#conway',
        'cellWidth': 10,
        'generationDuration': 300
    });

    new Frontend(config);

});
