import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Frontend from './frontend';

$(document).ready(function(){

    let frontend = new Frontend(
        $('#conway')
    );

    const habitat = frontend.getHabitat();

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

        frontend.update();
        frontend.render();

        window.requestAnimationFrame(loop);
    };

    loop();

    frontend.elapse();

  });
