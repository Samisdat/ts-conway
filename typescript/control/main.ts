import * as $ from 'jquery';

import Position from '../position';
import TweenPosition from '../tweenposition';
import Tween from '../tween';
import BoundPosition from '../boundposition';
import Bound from '../bound';

import ZoomControl from './zoom';

import PanControl from './pan';

export default class MainControl {

    private readonly canvasWrap: HTMLElement;

    private readonly originalCellWidth: number;

    private control: JQuery;

    private zoomControl: ZoomControl;

    private panControl: PanControl;

    constructor(canvasWrap: HTMLElement, originalCellWidth: number) {

        this.canvasWrap = canvasWrap;

        this.originalCellWidth = originalCellWidth;

        this.createControl();
        this.createZoomControl();
        this.createPanControl();

    }

    private createControl(): void {

        this.control = $('<div>');
        this.control.addClass('control');

        $(this.canvasWrap).append(this.control);

    }

    private createPanControl(): void {

        this.panControl = new PanControl(
        this.canvasWrap,
        this.control,
        this.originalCellWidth,
        this.zoomControl

        );

    }

    private createZoomControl(): void {

        this.zoomControl = new ZoomControl(this.control);

    }

    public getZoom(): number {
        return this.zoomControl.getZoom();
    }

    public getPan(): Position {
        return this.panControl.getPan();
    }

    public update(): void {
        this.panControl.update();
        this.zoomControl.update();
    }

}