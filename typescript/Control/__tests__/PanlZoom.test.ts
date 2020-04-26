/**
 * @jest-environment jsdom
 */

import {ZoomControl} from '../ControlZoom';
import {PanControl} from '../ControlPan';
import {CELL_WIDTH, PAN_TWEEN_STEPS} from '../../Constants';
import {Position} from '../../Conway/position';

describe('ControlPan', () => {

    let canvasWrap: HTMLElement;
    let controllWrap: HTMLElement;
    let wrapElement: HTMLElement;
    let zoomControl: ZoomControl;

    beforeEach(() => {

        canvasWrap = document.createElement('div');
        canvasWrap.append(
            document.createElement('canvas')
        );

        controllWrap = document.createElement('div');
        wrapElement = document.createElement('div');

        zoomControl = new ZoomControl(
            document.createElement('div')
        );
    });

    test('can be created', () => {

        let pamControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

        expect(pamControl).toBeInstanceOf(PanControl);

    });

    test('can click on left', () => {

        let panControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('left')[0] as HTMLElement;
        panLeft.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }
        expect(panControl.getPan()).toStrictEqual(new Position(-1, 0));


    });

    test('can click on right', () => {

        let panControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('right')[0] as HTMLElement;
        panLeft.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }
        expect(panControl.getPan()).toStrictEqual(new Position(1, 0));


    });

    test('can click on top', () => {

        let panControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('top')[0] as HTMLElement;
        panLeft.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }
        expect(panControl.getPan()).toStrictEqual(new Position(0, -1));


    });

    test('can click on bottom', () => {

        let panControl = new PanControl(
            canvasWrap,
            controllWrap,
            CELL_WIDTH,
            zoomControl
        );

        expect(panControl.getPan()).toStrictEqual(new Position(0, 0));

        const panLeft = controllWrap.getElementsByClassName('bottom')[0] as HTMLElement;
        panLeft.click();

        for (let i = 0; i < PAN_TWEEN_STEPS; i += 1) {
            panControl.update();
        }
        expect(panControl.getPan()).toStrictEqual(new Position(0, 1));


    });

});
