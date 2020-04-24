/**
 * @jest-environment jsdom
 */
import {ZoomControl} from '../ControlZoom';

describe('ControlZoom', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

    });

    test('can be created', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl).toBeInstanceOf(ZoomControl);

    });

});
