/**
 * While this test is named _first.ts it while run as first test and is used to setup jQuery
 */

import jsdom = require('jsdom');
let document = jsdom.jsdom('<html><body></body></html>');
let window = document.defaultView;

global.window = window
global.$ = require('jquery');
global.vf = {};
declare var vf:any;
