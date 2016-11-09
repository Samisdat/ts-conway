import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Frontend from './frontend';
import CanvasRenderer from './canvas-renderer'

$(document).ready(function(){

    const canvas = function(selector){

        let renderer = new CanvasRenderer(
            $(selector)
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

        /*
        habitat.seed(
            new Position(0, -1)
        );

        habitat.seed(
            new Position(0, 1)
        );
        */


        $('.control .top').click(function(){
            console.log(renderer.panBy(new Position( 0, -1)))
        });

        $('.control .bottom').click(function(){
            console.log(renderer.panBy(new Position( 0, 1)))
        });

        $('.control .left').click(function(){
            console.log(renderer.panBy(new Position( -1, 0)))
        });

        $('.control .right').click(function(){
            console.log(renderer.panBy(new Position( 1, 0)))
        });

        renderer.render();

        /*
        window.setInterval(() => {
            renderer.elapse();
            renderer.render();
        }, 1000);
        */

    }

    //canvas('#conway');

    canvas('#conway2');

  });
