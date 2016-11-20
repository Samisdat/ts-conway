import * as $ from 'jquery';

import Position from './position';
import PositionTween from './positiontween';
import Tween from './tween';
import PositionBound from './positionbound';
import Bound from './bound';

export default class Control {

    private readonly canvasWrap: HTMLElement;

    private readonly originalCellWidth:number;

    private offset: JQueryCoordinates = {
        left: 0,
        top: 0
    };

    private control: JQuery;

    private zoomTween: Tween = new Tween(1, 10);

    private zoomBound: Bound = new Bound(0.2, 10);

    private positionTween: PositionTween = new PositionTween(
        new Position(0, 0),
        10
    );

    private positionBound: PositionBound = new PositionBound(
        new Position(-30, -30),
        new Position(30, 30)
    );

    constructor(canvasWrap: HTMLElement, originalCellWidth:number) {

        this.canvasWrap = canvasWrap;

        this.originalCellWidth = originalCellWidth

        this.createControl();
        this.createPanControl();
        this.createZoomControl();

        this.addEventListener();
    }

    private createControl(): void {

        this.control = $('<div>');
        this.control.addClass('control');

        $(this.canvasWrap).append(this.control);

    }

    private getControlElement(action: string, value: string, icon: string): JQuery {
        const element = $('<div>');
        element.addClass(value);
        element.attr('data-action', action);
        element.attr('data-value', value);
        element.append($('<i class="fa fa-' + icon + '">'));

        return element
    }

    private createPanControl(): void {

        const pan = $('<div>');
        pan.addClass('pan');

        $(pan).append(this.getControlElement('pan', 'top', 'arrow-up'));
        $(pan).append(this.getControlElement('pan', 'bottom', 'arrow-down'));
        $(pan).append(this.getControlElement('pan', 'left', 'arrow-left'));
        $(pan).append(this.getControlElement('pan', 'right', 'arrow-right'));

        this.control.append(pan);
    }

    private createZoomControl(): void {

        const zoom = $('<div>');
        zoom.addClass('zoom');

        $(zoom).append(this.getControlElement('zoom', 'zoom-in', 'search-plus'));
        $(zoom).append(this.getControlElement('zoom', 'zoom-out', 'search-minus'));

        this.control.append(zoom);
    }

    private addEventListener(): void {

        const control = this;

        $(this.canvasWrap).on('click', '.control div[data-action]', function () {

            let action = $(this).data('action');
            let value = $(this).data('value');

            if ('pan' === action) {
                control.setPan(value);
            }
            else if ('zoom' === action) {
                control.setZoom(value);
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

            let offset:JQueryCoordinates = {
                left: evt.clientX - this.offset.left,
                top: evt.clientY - this.offset.top
            };

            offset.left = offset.left / (this.getZoom() * this.originalCellWidth);
            offset.top = offset.top / (this.getZoom() * this.originalCellWidth);

            if(true === $(this.canvasWrap).hasClass('mousedown')){

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

    public getZoom(): number {
        return this.zoomTween.getCurrent();
    }
    public setZoom(mode: string) {

        let modifier = 1;

        if (1 > this.zoomTween.getEnd()) {
            modifier = 0.1
        }
        else if (1 === this.zoomTween.getEnd() && 'zoom-out' === mode) {
            modifier = 0.1
        }

        if ('zoom-out' === mode) {
            modifier = -1 * modifier;
        }

        this.zoomTween.setEnd(
            this.zoomBound.confine(Math.round((this.zoomTween.getEnd() + modifier) * 10) / 10)
        );

    }

    public getPan(): Position {
        return this.positionTween.getCurrent();
    }

    public overwritePan(position: Position): void {
        this.positionTween.overwrite(position);
    }

    public setPan(mode: string): void {

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

        this.positionTween.setEnd(
            this.positionBound.confine(panTo)
        );
    }

    public update(): void {
        this.positionTween.update();
        this.zoomTween.update();
    }

}