import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Frontend from './frontend';
import CanvasRenderer from './canvas-renderer'

$(document).ready(function(){

    let renderer = new CanvasRenderer(
        $('#conway')
    );

    const habitat = renderer.getHabitat();

    habitat.seed(
        new Position(-1, 0)
    );
    habitat.seed(
        new Position(0, 0)
    );
    habitat.seed(
        new Position(1, 0)
    );

    let loop = function(){

        renderer.update();
        renderer.render();

        window.requestAnimationFrame(loop);
        //window.setTimeout(loop, 500)    
    }

    loop();

    renderer.elapse();

  });
