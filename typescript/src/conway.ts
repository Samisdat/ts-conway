import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Patterns from './patterns';
import Frontend from './frontend';

$(document).ready(function(){

    const patterns = new Patterns();

    let frontend = new Frontend(
        $('#conway')
    );

    const habitat = frontend.getHabitat();

    habitat.seedPattern(patterns.get('guns_and_eaters'));

    let loop = function(){

        frontend.update();
        frontend.render();

        window.requestAnimationFrame(loop);

        //window.setTimeout(loop, 1000);
    };

    loop();

    frontend.elapse();

    $(window).resize(()=>{
        frontend.resize();
    });

  });
