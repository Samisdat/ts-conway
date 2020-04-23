import { Position } from '../Conway/position';
import { TweenPosition } from '../Conway/tweenposition';
import { BoundPosition } from './boundposition';

import { ControlAbstract } from './ControlAbstract';

import { ZoomControl } from './ControlZoom';


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
        pan.classList.add('pan');

        this.top = this.getControlElement('pan', 'top', 'arrow-up');
        this.bottom = this.getControlElement('pan', 'bottom', 'arrow-down');
        this.left = this.getControlElement('pan', 'left', 'arrow-left');
        this.right = this.getControlElement('pan', 'right', 'arrow-right');

        pan.append(this.top);
        pan.append(this.bottom);
        pan.append(this.left);
        pan.append(this.right);

        this.control.append(pan);
    }

    public addEventListener(): void {

        const listen = (event:Event) => {

            const target = event.currentTarget as HTMLElement;

            let action = target.getAttribute('data-action');
            let value = target.getAttribute('data-value');

            if ('pan' === action) {
                this.setPan(target);
            }

        };

        this.top.addEventListener('click', listen);
        this.bottom.addEventListener('click', listen);
        this.left.addEventListener('click', listen);
        this.right.addEventListener('click', listen);

        const canvas = this.canvasWrap.getElementsByTagName('canvas')[0];

        canvas.addEventListener('mousedown',  (event:MouseEvent) => {

            this.canvasWrap.classList.add('mousedown');

            this.offset = {
                left: event.clientX,
                top: event.clientY
            };

        });

        canvas.addEventListener('mouseup', (event: MouseEvent) => {

            this.canvasWrap.classList.remove('mousedown');

        });

        canvas.addEventListener('mousemove', (event:MouseEvent) => {

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

    public overwritePan(position: Position): void {
        this.positionTween.overwrite(position);
    }

    public setPan(target: HTMLElement): void {

        let mode = target.getAttribute('data-value');

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
