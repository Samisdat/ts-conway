/**
 * @jest-environment jsdom
 */
import {CELL_WIDTH} from '@Conway/Constants';
import {MainControl} from '@Conway/Control/ControlMain';
import {Position} from '@Conway/Conway/Position';

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

    test('can get zoom', () => {

        let mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        expect(mainControl.getZoom()).toBe(1);

    });

    test('can get pan', () => {

        let mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        expect(mainControl.getPan()).toStrictEqual(new Position(0, 0));

    });

    test('can update', () => {

        let mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        mainControl.update();

        expect(mainControl.getPan()).toStrictEqual(new Position(0, 0));

    });

});
