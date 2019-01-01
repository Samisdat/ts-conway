import { expect } from 'chai';

import { Frontend } from './frontend';

describe.skip('Frontend', () => {

    before(()=>{

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
            $('<div id="conway">')
        );

        const frontend = new Frontend($('#conway'));

        expect(frontend).to.be.instanceof(Frontend);

    });

    it('creation fails with not dom elem', () => {

        let createFrontend = function() {
            const frontend = new Frontend($('#conway'));
        };

        expect(createFrontend).to.throw(Error, 'jquery selector does not match an element');
    });


});
