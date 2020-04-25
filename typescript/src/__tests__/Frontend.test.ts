/**
 * @jest-environment jsdom
 */
import {Frontend} from '../Frontend';
import {HTML_ID} from '../../Constants';

describe('Frontend', () => {

    beforeAll(() => {

        const element = document.createElement('div');
        element.setAttribute('id', HTML_ID);

        document.body.append(element);

    });

    afterAll(() => {

        document.body.innerHTML = '';

    });

    test('can be created', () => {

        let frontend = new Frontend();

        expect(frontend).toBeInstanceOf(Frontend);

    });

});
