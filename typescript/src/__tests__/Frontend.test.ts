/**
 * @jest-environment jsdom
 */
import {Frontend} from '../Frontend';
import {NoControl} from '../../Control/ControlNo';
import {MainControl} from '../../Control/ControlMain';
import {CELL_WIDTH} from '../../Constants';

describe('Frontend', () => {

    let element: HTMLElement;


    beforeAll(() => {

        element = document.createElement('div');

    });

    test('can be created without control', () => {

        let frontend = new Frontend(
            element,
            new NoControl()
        );

        expect(frontend).toBeInstanceOf(Frontend);

    });

    test('can be created with maincontrol', () => {

        let frontend = new Frontend(
            element,
            new MainControl(element, CELL_WIDTH)
        );

        expect(frontend).toBeInstanceOf(Frontend);

    });

});
