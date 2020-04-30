/**
 * @jest-environment jsdom
 */
import {Web} from '../Web';
import {NoControl} from '../../Control/ControlNo';
import {MainControl} from '../../Control/ControlMain';
import {CELL_WIDTH} from '../../Constants';
import {guns_and_eaters} from '../../Seed/guns_and_eaters';

describe('Frontend/Web', () => {

    let element: HTMLElement;



    beforeAll(() => {

        element = document.createElement('div');

    });

    test('can be created without control', () => {

        let frontend = new Web(
            element,
            guns_and_eaters,
            new NoControl()
        );

        expect(frontend).toBeInstanceOf(Web);

    });

    test('can be created with maincontrol', () => {

        let frontend = new Web(
            element,
            guns_and_eaters,
            new MainControl(element, CELL_WIDTH)
        );

        expect(frontend).toBeInstanceOf(Web);

    });

});
