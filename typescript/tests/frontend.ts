import { expect } from 'chai';

import jsdom = require('jsdom');
var document = jsdom.jsdom('<html><body></body></html>');
var window = document.defaultView;
global.window = window
global.$ = require('jquery');

import Frontend from '../src/frontend';

describe('Frontend', () => {

    afterEach( () => {
        $('body').html('');
    });

    it('create', () => {

        $('body').append(
            $('<div id="conway">')
        );        

        const frontend = new Frontend($('#conway'));

        expect(frontend).to.be.instanceof(Frontend);

    });

    it('creation fails with not dom elem', () => {

        let createFrontend = function(){
            const frontend = new Frontend($('#conway'));
        };

        expect(createFrontend).to.throw(Error, 'jquery selector does not match an element');
    });


});
