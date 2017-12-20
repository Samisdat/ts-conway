import * as $ from 'jquery';

import Position from '../position';
import TweenPosition from '../tweenposition';
import Tween from '../tween';
import BoundPosition from '../boundposition';
import Bound from '../bound';

import Control from './control';

export default class ZoomControl extends Control {

    private control: JQuery;

    private zoomIn: JQuery;
    private zoomOut: JQuery;

    private zoomTween: Tween = new Tween(1, 10);

    private zoomBound: Bound = new Bound(0.2, 10);

    constructor(controllWrap: JQuery) {

        super();

        this.control = controllWrap;

        this.createControl();

        this.addEventListener();
    }

    public createControl(): void {

        const zoom = $('<div>');
        zoom.addClass('zoom');

        this.zoomIn = this.getControlElement('zoom', 'zoom-in', 'search-plus');
        this.zoomOut = this.getControlElement('zoom', 'zoom-out', 'search-minus');

        $(zoom).append(this.zoomIn);
        $(zoom).append(this.zoomOut);

        this.control.append(zoom);
    }

    public addEventListener(): void {

        $(this.control).on('click', '.zoom-in, .zoom-out', (evt) => {

            const target: JQuery = $(evt.currentTarget);

            let action = target.data('action');
            let value = target.data('value');

            if ('zoom' === action) {
                this.setZoom(value);
            }

        });

    }

    public getZoom(): number {
        return this.zoomTween.getCurrent();
    }

    public setZoom(mode: string) {

        let modifier = 1;

        if (1 > this.zoomTween.getEnd()) {
            modifier = 0.1;
        }
        else if (1 === this.zoomTween.getEnd() && 'zoom-out' === mode) {
            modifier = 0.1;
        }

        if ('zoom-out' === mode) {
            modifier = -1 * modifier;
        }

        const nextZoom = Math.round((this.zoomTween.getEnd() + modifier) * 10) / 10;

        console.log(nextZoom, this.zoomBound.isAbove(nextZoom), this.zoomBound.isWithin(nextZoom))

        if (false === this.zoomBound.isAbove(nextZoom)) {
            this.zoomIn.removeClass('inactive');
        }
        else {
            this.zoomIn.addClass('inactive');
        }

        if (false === this.zoomBound.isBelow(nextZoom)) {
            this.zoomOut.removeClass('inactive');
        }
        else {
            this.zoomOut.addClass('inactive');
        }

        this.zoomTween.setEnd(
            this.zoomBound.confine(nextZoom)
        );

    }

    public update(): void {
        this.zoomTween.update();
    }

}