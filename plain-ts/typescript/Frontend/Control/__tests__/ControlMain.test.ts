/**
 * @jest-environment jsdom
 */
import {CELL_WIDTH} from '@Conway/Constants';
import {Position} from '@Conway/Geometry/Position';
import {MainControl} from '@Conway/Frontend/Control/ControlMain';

describe('MainControl', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

        element.append(
            document.createElement('canvas')
        );


    });

    test('can be created', () => {

        const mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        expect(mainControl).toBeInstanceOf(MainControl);

    });

    test('can get zoom', () => {

        const mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        expect(mainControl.getZoom()).toBe(1);

    });

    test('can get pan', () => {

        const mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        expect(mainControl.getPan()).toStrictEqual(new Position(0, 0));

    });

    test('can update', () => {

        const mainControl = new MainControl(
            element,
            CELL_WIDTH
        );

        mainControl.update();

        expect(mainControl.getPan()).toStrictEqual(new Position(0, 0));

    });

});
