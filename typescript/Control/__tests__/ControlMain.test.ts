/**
 * @jest-environment jsdom
 */
import {MainControl} from '../ControlMain';
import {CELL_WIDTH} from '../../Constants';

describe('MainControl', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

        element.append(
            document.createElement('canvas')
        );


    });

    test('can be created', () => {

        let mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        expect(mainControl).toBeInstanceOf(MainControl);

    });

});
