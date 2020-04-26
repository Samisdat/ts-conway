/**
 * @jest-environment jsdom
 */
import {Frontend} from '../Frontend';

describe('Frontend', () => {

    let element: HTMLElement;


    beforeAll(() => {

        element = document.createElement('div');

    });

    test('can be created', () => {

        let frontend = new Frontend(element);

        expect(frontend).toBeInstanceOf(Frontend);

    });

});
