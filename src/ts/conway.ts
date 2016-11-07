import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Frontend from './frontend';
import CanvasRenderer from './canvas-renderer'

$(document).ready(function(){

    let renderer = new CanvasRenderer(
        $('#conway')
    );

    renderer.render();

  });
