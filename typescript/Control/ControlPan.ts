import {ControlInterface, createControlElement} from '@Conway/Control/Control';
import {Tweenposition} from '@Conway/Conway/Tweenposition';
import {PAN_TWEEN_STEPS} from '@Conway/Constants';
import {BoundPosition} from '@Conway/Control/boundposition';
import {ZoomControl} from '@Conway/Control/ControlZoom';
import {Position} from '@Conway/Conway/Position';

type PanMode = 'top' | 'bottom' | 'left' | 'right' | 'center';
const PAN_MODES: PanMode[] = ['top', 'bottom', 'left', 'right', 'center'];

interface PanByInterface {
    [index: string]: Position;
}

export class PanControl implements ControlInterface {

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

        const top = createControlElement (['conway__control-pan__element', 'conway__control-pan__top'], 'top', 'arrow-up');
        const bottom = createControlElement(['conway__control-pan__element', 'conway__control-pan__bottom'], 'bottom', 'arrow-down');
        const left = createControlElement(['conway__control-pan__element', 'conway__control-pan__left'], 'left', 'arrow-left');
        const right = createControlElement(['conway__control-pan__element', 'conway__control-pan__right'], 'right', 'arrow-right');
        const center = createControlElement(['conway__control-pan__element', 'conway__control-pan__center'], 'center', 'crosshairs');

        pan.append(top);
        pan.append(bottom);
        pan.append(left);
        pan.append(right);
        pan.append(center);

        this.control.append(pan);
    }

    private addEventListener(): void {

        const listen = (event: Event) => {

            let target = event.target as HTMLElement;

            if (false === target.classList.contains('conway__control-pan__element')) {

                target = target.parentElement as HTMLElement;

            }

            let mode = target.getAttribute('data-value') as PanMode;

            this.setPan(mode);

        };

        this.control.addEventListener('click', listen);

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

                this.positionTween.overwrite(this.positionBound.confine(position));

                this.updateState(this.positionBound.confine(position));


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

        this.updateState(this.positionBound.confine(panTo));

        this.positionTween.setEnd(
            this.positionBound.confine(panTo)
        );

    }

    private updateState(panTo: Position): void {

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
            else {

                panElement.classList.add('conway__control-pan--incactive');

            }

        }

    }

    public update(): void {
        this.positionTween.update();
    }

}
