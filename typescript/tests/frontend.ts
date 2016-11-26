import { expect } from 'chai';

import jsdom = require('jsdom');
var document = jsdom.jsdom('');
var window = document.defaultView;
global.window = window
global.$ = require('jquery');

import Frontend from '../src/frontend';

describe('Frontend', () => {

    it('can be created', () => {

        console.log($)

        $.each([1,2,3], function(){

            console.log(this)

        })

    });

});
