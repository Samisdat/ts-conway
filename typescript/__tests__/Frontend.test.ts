/**
 * @jest-environment jsdom
 */
import {Frontend} from '../src/Frontend';

describe.skip('Frontend', () => {

    beforeAll(() => {

        const conwayElement = document.createElement('div');
        conwayElement.setAttribute('id', 'conway');

        document.body.appendChild(
            conwayElement
        );

    });

    afterEach( () => {
        document.body.innerHTML = '';
    });

    it('create', () => {

        const frontend = new Frontend();

        expect(frontend).toBeInstanceOf(Frontend);

    });

    it('creation fails with not dom elem', () => {

        let createFrontend = function() {
            const frontend = new Frontend();
        };

        expect(createFrontend).toThrowErrorMatchingSnapshot();

    });


});
