import { Position } from '../Conway/Position';
import { Tweenposition } from '../Conway/Tweenposition';
import { BoundPosition } from './boundposition';

import { ControlAbstract } from './ControlAbstract';

import { ZoomControl } from './ControlZoom';
import {PAN_TWEEN_STEPS} from '../Constants';


export class PanControl extends ControlAbstract {

    private readonly canvasWrap: Element;

    private readonly originalCellWidth: number;

    private control: HTMLElement;

    private offset: any = {
        left: 0,
        top: 0
    };

    private left: HTMLElement;
    private right: HTMLElement;
    private top: HTMLElement;
    private bottom: HTMLElement;
    private center: HTMLElement;

    private positionTween: Tweenposition = new Tweenposition(
        new Position(0, 0),
        PAN_TWEEN_STEPS
    );

    private positionBound: BoundPosition = new BoundPosition(
        new Position(-20, -20),
        new Position(20, 20)
    );

    private zoomControl: ZoomControl;

    constructor(
        canvasWrap: Element,
        controllWrap: HTMLElement,
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

        const pan = document.createElement('div');
        pan.classList.add('conway__control-pan');

        this.top = this.getControlElement('conway__control-pan__top', 'top', 'arrow-up');
        this.bottom = this.getControlElement('conway__control-pan__bottom', 'bottom', 'arrow-down');
        this.left = this.getControlElement('conway__control-pan__left', 'left', 'arrow-left');
        this.right = this.getControlElement('conway__control-pan__right', 'right', 'arrow-right');
        this.center = this.getControlElement('conway__control-pan__center', 'center', 'crosshairs');

        pan.append(this.top);
        pan.append(this.bottom);
        pan.append(this.left);
        pan.append(this.right);
        pan.append(this.center);

        this.control.append(pan);
    }

    public addEventListener(): void {

        const listen = (event: Event) => {

            const target = event.currentTarget as HTMLElement;
            this.setPan(target);

        };

        this.top.addEventListener('click', listen);
        this.bottom.addEventListener('click', listen);
        this.left.addEventListener('click', listen);
        this.right.addEventListener('click', listen);
        this.center.addEventListener('click', listen);

        const canvas = this.canvasWrap.getElementsByTagName('canvas')[0];

        canvas.addEventListener('mousedown',  (event: MouseEvent) => {

            this.canvasWrap.classList.add('mousedown');

            this.offset = {
                left: event.clientX,
                top: event.clientY
            };

        });

        canvas.addEventListener('mouseup', (event: MouseEvent) => {

            this.canvasWrap.classList.remove('mousedown');

        });

        canvas.addEventListener('mousemove', (event: MouseEvent) => {

            let offset: any = {
                left: event.clientX - this.offset.left,
                top: event.clientY - this.offset.top
            };

            offset.left = offset.left / (this.zoomControl.getZoom() * this.originalCellWidth);
            offset.top = offset.top / (this.zoomControl.getZoom() * this.originalCellWidth);

            if (true === this.canvasWrap.classList.contains('mousedown')) {

                let position = this.positionTween.getCurrent().move(
                    new Position(offset.left, offset.top).inverse()
                );

                this.positionTween.overwrite(position);

            }

            this.offset = {
                left: event.clientX,
                top: event.clientY
            };

        });

    }

    public getPan(): Position {
        return this.positionTween.getCurrent();
    }

    public setPan(target: HTMLElement): void {

        let mode = target.getAttribute('data-value') as string;

        if ('center' === mode) {

            this.positionTween.setEnd(
                this.positionBound.confine(new Position(0, 0))
            );
            return;
        }

        let panX = 0;
        let panY = 0;

        if ('top' === mode) {
            panY = -5;
        }
        else if ('bottom' === mode) {
            panY = 5;
        }
        else if ('left' === mode) {
            panX = -5;
        }
        else if ('right' === mode) {
            panX = 5;
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
                this.top.classList.remove('inactive');
            }
            else {
                this.top.classList.add('inactive');
            }

            panTo = panTo.move(new Position(0, 1));

            if (true === this.positionBound.isWithin(panTo)) {
                this.bottom.classList.remove('inactive');
            }
            else {
                this.bottom.classList.add('inactive');
            }

        }
        else if ('bottom' === mode) {

            if (true === this.positionBound.isWithin(panTo)) {
                this.bottom.classList.remove('inactive');
            }
            else {
                this.bottom.classList.add('inactive');
            }

            panTo = panTo.move(new Position(0, -1));

            if (true === this.positionBound.isWithin(panTo)) {
                this.top.classList.remove('inactive');
            }
            else {
                this.top.classList.add('inactive');
            }

        }
        else if ('left' === mode) {

            if (true === this.positionBound.isWithin(panTo)) {
                this.left.classList.remove('inactive');
            }
            else {
                this.left.classList.add('inactive');
            }

            panTo = panTo.move(new Position(1, 0));

            if (true === this.positionBound.isWithin(panTo)) {
                this.right.classList.remove('inactive');
            }
            else {
                this.right.classList.add('inactive');
            }

        }
        else if ('right' === mode) {

            if (true === this.positionBound.isWithin(panTo)) {
                this.right.classList.remove('inactive');
            }
            else {
                this.right.classList.add('inactive');
            }

            panTo = panTo.move(new Position(-1, 0));

            if (true === this.positionBound.isWithin(panTo)) {
                this.left.classList.remove('inactive');
            }
            else {
                this.left.classList.add('inactive');
            }

        }

    }

    public update(): void {
        this.positionTween.update();
    }

}
