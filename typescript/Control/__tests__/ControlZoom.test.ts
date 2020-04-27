/**
 * @jest-environment jsdom
 */
import {ZoomControl} from '../ControlZoom';
import {PanControl} from '../ControlPan';
import {CELL_WIDTH, PAN_TWEEN_STEPS, ZOOM_TWEEN_STEPS} from '../../Constants';
import {Position} from '../../Conway/position';

describe('ControlZoom', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

    });

    test('can be created', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl).toBeInstanceOf(ZoomControl);

    });

    test('can click on zoom-in', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('zoom-in')[0] as HTMLElement;
        zoomIn.click();

        for (let i = 0; i < ZOOM_TWEEN_STEPS; i += 1) {
            zoomControl.update();
        }
        expect(zoomControl.getZoom()).toStrictEqual(2);


    });

    test('can click on zoom-out', () => {

        let zoomControl = new ZoomControl(element);

        expect(zoomControl.getZoom()).toStrictEqual(1);

        const zoomIn = element.getElementsByClassName('zoom-out')[0] as HTMLElement;
        zoomIn.click();

        for (let i = 0; i < ZOOM_TWEEN_STEPS; i += 1) {
            zoomControl.update();
        }
        expect(zoomControl.getZoom()).toStrictEqual(0.9);


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
