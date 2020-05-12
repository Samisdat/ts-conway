/**
 * @jest-environment jsdom
 */
import {ZoomControl} from '@Conway/Frontend/Control/ControlZoom';
import {clickAndWaitForTweenEnd} from '@Conway/Frontend/Control/test-helper/clickAndWaitForTweenEnd';
import {ZOOM_TWEEN_STEPS} from '@Conway/Constants';

describe('ControlZoom', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

    });

    test('can be created', () => {

        const zoomControl = new ZoomControl(element);

        expect(zoomControl).toBeInstanceOf(ZoomControl);

    });

    test('can click on zoom-in', () => {

        const zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('conway__control-zoom__in')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomIn,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(1.2);

    });

    test('can click on icon within zoom-in', () => {

        const zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('conway__control-zoom__in')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomIn.getElementsByClassName('fa')[0] as HTMLElement,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(1.2);

    });

    test('can click on zoom-out', () => {

        const zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomOut = element.getElementsByClassName('conway__control-zoom__out')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomOut,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(0.8);


    });

    test('zoom-in beyoond bound', () => {

        const zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('conway__control-zoom__in')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomIn,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(1.2);

    });

    test('zoom-out beyoond bound', () => {

        const zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomOut = element.getElementsByClassName('conway__control-zoom__out')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomOut,
            ZOOM_TWEEN_STEPS
        );

        // why 0.8 ;)
        expect(zoomControl.getZoom()).toStrictEqual(0.8);

    });

    test('can handle click onto an element that ist not an valid zoom', () => {

        const htmlDivElement = document.createElement('div');

        htmlDivElement.classList.add('not-zoom');
        htmlDivElement.setAttribute('data-value', 'not-zoom');

        element.append(htmlDivElement);

        const zoomControl = new ZoomControl(element);

        const notZoom = element.getElementsByClassName('not-zoom')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            notZoom,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(1);

    });

});
