import * as $ from 'jquery';

import { Frontend } from './frontend';

$(document).ready(function() {

    new Frontend($('#conway1'));

    new Frontend($('#conway2'));


    $('#sync').find('.pan .top').click(() => {
        $('#conway1 .pan .top, #conway2 .pan .top').click();
    });

    $('#sync').find('.pan .bottom').click(() => {
        $('#conway1 .pan .bottom, #conway2 .pan .bottom').click();
    });

    $('#sync').find('.pan .left').click(() => {
        $('#conway1 .pan .left, #conway2 .pan .left').click();
    });

    $('#sync').find('.pan .right').click(() => {
        $('#conway1 .pan .right, #conway2 .pan .right').click();
    });

    $('#sync').find('.zoom-in').click(() => {
        $('#conway1 .zoom-in, #conway2 .zoom-in').click();
    });

    $('#sync').find('.zoom-out').click(() => {
        $('#conway1 .zoom-out, #conway2 .zoom-out').click();
    });


});
