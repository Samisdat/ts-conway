import * as $ from 'jquery';

import Frontend from './frontend';


import CanvasRenderer from './canvas-renderer';

$(document).ready(function(){

    new Frontend($('#conway'));

});
