import * as $ from 'jquery';

import Grid from './grid';
import CheckerBoard from './checkerboard';


import CanvasRenderer from './canvas-renderer';

$(document).ready(function(){

    let checkerboard = new CheckerBoard();

    let canvasRenderer = new CanvasRenderer(
        $('#conway')
    );

    console.log($('#conway').width()/30)
    console.log()

    let grid = new Grid(
        $('#conway').height()/30, 
        $('#conway').width()/30 
    );
    
    checkerboard.update(grid);
    canvasRenderer.update(30, grid);

    canvasRenderer.render();

});
