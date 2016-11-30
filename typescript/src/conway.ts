import * as $ from 'jquery';

import Frontend from './frontend';


import CanvasRenderer from './canvas-renderer';

$(document).ready(function(){

    new Frontend($('#conway1'));

    new Frontend($('#conway2'));

    new Frontend($('#conway3'));

    new Frontend($('#conway4'));

});
