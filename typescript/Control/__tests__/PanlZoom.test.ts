/**
 * @jest-environment jsdom
 */

import {ZoomControl} from '../ControlZoom';
import {PanControl} from '../ControlPan';
import {CELL_WIDTH} from '../../Constants';

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

});
