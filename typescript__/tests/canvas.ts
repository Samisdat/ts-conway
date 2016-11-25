import { expect } from 'chai';

var jsdom = require('jsdom');
var document = jsdom.jsdom();
var window = document.defaultView;

var $ = require('jquery')(window);

import Canvas from '../src/canvas';

describe.skip('Canvas', () => {

    let canvasContext: CanvasRenderingContext2D;

    before(() =>{

        let canvas = $('<canvas>');
        canvasContext = canvas.get(0).getContext('2d') as CanvasRenderingContext2D;

    });

    after(() =>{

        canvasContext = undefined;

    });


    it('can be created', () => {

        let canvas = new Canvas(
            canvasContext
        );

        expect(canvas).to.be.instanceof(Canvas);

    });

    it('can get cxt', () => {

        let canvas = new Canvas(
            canvasContext
        );

        expect(canvas.ctx).to.be.equal(canvasContext);

    });


});
