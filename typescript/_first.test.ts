/**
 * While this test is named _first.ts it while run as first test and is used to setup jQuery
 */

/// <reference path="./global.d.ts" />

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

global.window = new JSDOM('<html><body></body></html>');
global.document = window.window;

global.$ = require('jquery');
