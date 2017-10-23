/**
 * While this test is named _first.ts it while run as first test and is used to setup jQuery
 */

/// <reference path="../src/global.d.ts" />

import jsdom = require('jsdom');
let document = jsdom.jsdom('<html><body></body></html>');
let window = document.defaultView;

global.window = window
global.$ = require('jquery');
