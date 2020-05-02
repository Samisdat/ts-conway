import { Position } from '../Conway/Position';
import { Tweenposition } from '../Conway/Tweenposition';
import { BoundPosition } from './boundposition';

import { ControlAbstract } from './ControlAbstract';

import { ZoomControl } from './ControlZoom';
import {PAN_TWEEN_STEPS} from '../Constants';

type PanMode = 'top' | 'bottom' | 'left' | 'right' | 'center';

const PAN_MODES: PanMode[] = ['top', 'bottom', 'left', 'right', 'center'];

interface PanByInterface {
    [index: string]: Position;
}

export class PanControl extends ControlAbstract {

    private readonly canvasWrap: Element;

    private readonly originalCellWidth: number;

    private control: HTMLElement;

    private offset: any = {
        left: 0,
        top: 0
    };

    private panBy: PanByInterface = {
        top: new Position(0, -5),
        bottom: new Position(0, 5),
        left: new Position(5, 0),
        right: new Position(-5, 0),
        center: new Position(5, 0)
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

            let mode = target.getAttribute('data-value') as PanMode;

            if (false === PAN_MODES.includes(mode)) {
                throw new Error('unsupported pan mode');
            }

            this.setPan(mode);

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

    public setPan(mode: PanMode): void {

        let panTo = new Position(0, 0);

        if ('center' !== mode) {

            const panBy = this.panBy[mode];

            panTo = this.positionTween.getEnd().move(panBy);

        }

        this.updateState(mode, this.positionBound.confine(panTo));

        this.positionTween.setEnd(
            this.positionBound.confine(panTo)
        );

    }

    private updateState(mode: PanMode, panTo: Position): void {

        const possiblePans: PanMode[] = [];

        for (const nextMode of PAN_MODES) {

            if ('center' === nextMode) {
                possiblePans.push(nextMode);
                continue;
            }

            let nextPan = panTo.move(this.panBy[nextMode]);

            let stillWithin  = this.positionBound.isWithin(nextPan);

            if (true === stillWithin) {
                possiblePans.push(nextMode);
            }

        }

        for (const panMode of PAN_MODES) {

            const panElement = this.control.getElementsByClassName('conway__control-pan__' + panMode)[0];

            if (true === possiblePans.includes(panMode)) {

                panElement.classList.remove('conway__control-pan--incactive');

            }
            else{

                panElement.classList.add('conway__control-pan--incactive');

            }

        }

    }

    public update(): void {
        this.positionTween.update();
    }

}
