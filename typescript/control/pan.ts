import * as $ from 'jquery';

import Position from '../position';
import TweenPosition from '../tweenposition';
import Tween from '../tween';
import BoundPosition from '../boundposition';
import Bound from '../bound';

import Control from './control';

import ZoomControl from './zoom';


export default class PanControl extends Control {

    private readonly canvasWrap: Element;

    private readonly originalCellWidth: number;

    private control: JQuery;

    private offset: JQueryCoordinates = {
        left: 0,
        top: 0
    };

    private left: JQuery;
    private right: JQuery;
    private top: JQuery;
    private bottom: JQuery;

    private positionTween: TweenPosition = new TweenPosition(
        new Position(0, 0),
        10
    );

    private positionBound: BoundPosition = new BoundPosition(
        new Position(-2, -2),
        new Position(2, 2)
    );

    private zoomControl: ZoomControl;

    constructor(
        canvasWrap: Element,
        controllWrap: JQuery,
        originalCellWidth: number,
        zoomControl: ZoomControl

    ) {

        super();

        this.canvasWrap = canvasWrap;

        this.originalCellWidth = originalCellWidth;

        this.control = controllWrap;

        this.zoomControl = zoomControl;

        this.createControl();

        this.addEventListener();
    }

    public createControl(): void {

        const pan = $('<div>');
        pan.addClass('pan');

        this.top = this.getControlElement('pan', 'top', 'arrow-up');
        this.bottom = this.getControlElement('pan', 'bottom', 'arrow-down');
        this.left = this.getControlElement('pan', 'left', 'arrow-left');
        this.right = this.getControlElement('pan', 'right', 'arrow-right');

        $(pan).append(this.top);
        $(pan).append(this.bottom);
        $(pan).append(this.left);
        $(pan).append(this.right);

        this.control.append(pan);
    }

    public addEventListener(): void {

        $(this.canvasWrap).on('click', '.control div[data-action]', (evt) => {

            const target: JQuery = $(evt.currentTarget);

            let action = target.data('action');
            let value = target.data('value');

            if ('pan' === action) {
                this.setPan(target);
            }
        });

        $(this.canvasWrap).on('mousedown', 'canvas', (evt) => {
            $(this.canvasWrap).addClass('mousedown');

            this.offset = {
                left: evt.clientX,
                top: evt.clientY
            };

        });

        $(this.canvasWrap).on('mouseup', 'canvas', (evt) => {
            $(this.canvasWrap).removeClass('mousedown');
        });

        $(this.canvasWrap).on('mousemove', 'canvas', (evt) => {

            let offset: JQueryCoordinates = {
                left: evt.clientX - this.offset.left,
                top: evt.clientY - this.offset.top
            };

            offset.left = offset.left / (this.zoomControl.getZoom() * this.originalCellWidth);
            offset.top = offset.top / (this.zoomControl.getZoom() * this.originalCellWidth);

            if (true === $(this.canvasWrap).hasClass('mousedown')) {

                let position = this.positionTween.getCurrent().move(
                    new Position(offset.left, offset.top)
                );

                this.positionTween.overwrite(position);

            }

            this.offset = {
                left: evt.clientX,
                top: evt.clientY
            };

        });

    }

    public getPan(): Position {
        return this.positionTween.getCurrent();
    }

    public overwritePan(position: Position): void {
        this.positionTween.overwrite(position);
    }

    public setPan(target: JQuery): void {

        let mode = target.data('value');

        let panX = 0;
        let panY = 0;

        if ('top' === mode) {
            panY = -1;
        }
        else if ('bottom' === mode) {
            panY = 1;
        }
        else if ('left' === mode) {
            panX = -1;
        }
        else if ('right' === mode) {
            panX = 1;
        }

        const panBy = new Position(panX, panY);

        const panTo = this.positionTween.getEnd().move(panBy);

        this.updateState(mode, panTo);

        this.positionTween.setEnd(
            this.positionBound.confine(panTo)
        );
    }

    private updateState(mode: string, panTo: Position): void {

        if ('top' === mode) {
            if (true === this.positionBound.isWithin(panTo)) {
                this.top.removeClass('inactive');
            }
            else {
                this.top.addClass('inactive');
            }

            panTo = panTo.move(new Position(0, 1));

            if (true === this.positionBound.isWithin(panTo)) {
                this.bottom.removeClass('inactive');
            }
            else {
                this.bottom.addClass('inactive');
            }

        }
        else if ('bottom' === mode) {

            if (true === this.positionBound.isWithin(panTo)) {
                this.bottom.removeClass('inactive');
            }
            else {
                this.bottom.addClass('inactive');
            }

            panTo = panTo.move(new Position(0, -1));

            if (true === this.positionBound.isWithin(panTo)) {
                this.top.removeClass('inactive');
            }
            else {
                this.top.addClass('inactive');
            }

        }
        else if ('left' === mode) {

            if (true === this.positionBound.isWithin(panTo)) {
                this.left.removeClass('inactive');
            }
            else {
                this.left.addClass('inactive');
            }

            panTo = panTo.move(new Position(1, 0));

            if (true === this.positionBound.isWithin(panTo)) {
                this.right.removeClass('inactive');
            }
            else {
                this.right.addClass('inactive');
            }

        }
        else if ('right' === mode) {

            if (true === this.positionBound.isWithin(panTo)) {
                this.right.removeClass('inactive');
            }
            else {
                this.right.addClass('inactive');
            }

            panTo = panTo.move(new Position(-1, 0));

            if (true === this.positionBound.isWithin(panTo)) {
                this.left.removeClass('inactive');
            }
            else {
                this.left.addClass('inactive');
            }

        }

    }

    public update(): void {
        this.positionTween.update();
    }

}
