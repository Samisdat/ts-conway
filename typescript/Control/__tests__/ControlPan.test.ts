/**
 * @jest-environment jsdom
 */

import {ZoomControl} from '../ControlZoom';
import {PanControl} from '../ControlPan';
import {CELL_WIDTH, PAN_TWEEN_STEPS, ZOOM_TWEEN_STEPS} from '../../Constants';
import {Position} from '../../Conway/position';

describe('ControlPan', () => {

    let controllWrap: HTMLElement;
    let panControl: PanControl;

    beforeEach(() => {

        const canvasWrap = document.createElement('div');
        canvasWrap.append(
            document.createElement('canvas')
        );

        controllWrap = document.createElement('div');
        const wrapElement = document.createElement('div');

        const zoomControl = new ZoomControl(
            document.createElement('div')
        );

        panControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

    });

    test('can be created', () => {

        expect(panControl).toBeInstanceOf(PanControl);

    });

    test('can click on left', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('left')[0] as HTMLElement;
        panLeft.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(-1, 0));

    });

    test('pan left beyond bound', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('left')[0] as HTMLElement;

        for (let x = 0; x < 10; x += 1) {
            panLeft.click();

            for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
                panControl.update();
            }
        }

        expect(panControl.getPan()).toStrictEqual(new Position(-2, 0));

    });


    test('can click on right', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panRight = controllWrap.getElementsByClassName('right')[0] as HTMLElement;
        panRight.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(1, 0));

    });

    test('pan right beyond bound', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panRight = controllWrap.getElementsByClassName('right')[0] as HTMLElement;

        for (let x = 0; x < 10; x += 1) {
            panRight.click();

            for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
                panControl.update();
            }
        }

        expect(panControl.getPan()).toStrictEqual(new Position(2, 0));

    });

    test('can click on top', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panTop = controllWrap.getElementsByClassName('top')[0] as HTMLElement;
        panTop.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, -1));

    });

    test('pan top beyond bound', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panTop = controllWrap.getElementsByClassName('top')[0] as HTMLElement;

        for (let x = 0; x < 10; x += 1) {
            panTop.click();

            for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
                panControl.update();
            }
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, -2));

    });

    test('can click on bottom', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panBottom = controllWrap.getElementsByClassName('bottom')[0] as HTMLElement;
        panBottom.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, 1));

    });

    test('pan bottom beyond bound', () => {

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panBottom = controllWrap.getElementsByClassName('bottom')[0] as HTMLElement;

        for (let x = 0; x < 10; x += 1) {
            panBottom.click();

            for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
                panControl.update();
            }
        }

        expect(panControl.getPan()).toStrictEqual(new Position(0, 2));

    });


});
