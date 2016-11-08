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

  });
