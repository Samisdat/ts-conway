/**
 * @jest-environment jsdom
 */
import {ZoomControl} from '../ControlZoom';
import {ZOOM_TWEEN_STEPS} from '../../Constants';
import {clickAndWaitForTweenEnd} from '../test-helper/clickAndWaitForTweenEnd';

describe('ControlZoom', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

    });

    test.only('can be created', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl).toBeInstanceOf(ZoomControl);

    });

    test.only('can click on zoom-in', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('conway__control-zoom__in')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomIn,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(1.2);

    });

    test.only('can click on icon within zoom-in', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('conway__control-zoom__in')[0] as HTMLElement;

        clickAndWaitForTweenEnd(
            zoomControl,
            zoomIn.getElementsByClassName('fa')[0] as HTMLElement,
            ZOOM_TWEEN_STEPS
        );

        expect(zoomControl.getZoom()).toStrictEqual(1.2);

    });

    test.only('can click on zoom-out', () => {

        let zoomControl = new ZoomControl(element);

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

        let zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('zoom-in')[0] as HTMLElement;

        for (let x = 0; x < 10; x += 1) {
            zoomIn.click();

            for (let i = 0; i < ZOOM_TWEEN_STEPS; i += 1) {
                zoomControl.update();
            }
        }

        expect(zoomControl.getZoom()).toStrictEqual(2);

    });

    test('zoom-out beyoond bound', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomOut = element.getElementsByClassName('zoom-out')[0] as HTMLElement;

        for (let x = 0; x < 10; x += 1) {
            zoomOut.click();

            for (let i = 0; i < ZOOM_TWEEN_STEPS; i += 1) {
                zoomControl.update();
            }
        }

        expect(zoomControl.getZoom()).toStrictEqual(0.1);



    });

});
