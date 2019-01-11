import { expect } from 'chai';

import { Frontend } from './src/Frontend';
import {Config} from './Config';

describe.skip('Frontend', () => {

    before(() => {

        const { JSDOM } = require( 'jsdom' );
        const jsdom = new JSDOM( '<html><body></body></html>' );

        const { window } = jsdom;
        const { document } = window;

        global.$ = global.jQuery = require( 'jquery' )( window );

        global.window = window;
        global.document = document;



    });

    afterEach( () => {
        $('body').html('');
    });

    it('create', () => {

        $('body').append(
            $('<div id="Conway">')
        );

        const frontend = new Frontend(new Config('#Conway', 50, 500));

        expect(frontend).to.be.instanceof(Frontend);

    });

    it('creation fails with not dom elem', () => {

        let createFrontend = function() {
            const frontend = new Frontend(new Config('#Conway', 50, 500));
        };

        expect(createFrontend).to.throw(Error, 'jquery selector does not match an element');
    });


});
