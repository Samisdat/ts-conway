import { Tween } from '../Conway/Tween';
import { Bound } from './bound';

import { ControlAbstract } from './ControlAbstract';
import {ZOOM_TWEEN_STEPS} from '../Constants';

export class ZoomControl extends ControlAbstract {

    private control: HTMLElement;

    private zoomIn: HTMLElement;
    private zoomOut: HTMLElement;

    private zoomTween: Tween = new Tween(1, ZOOM_TWEEN_STEPS);

    private zoomBound: Bound = new Bound(0.5, 3);

    constructor(controllWrap: HTMLElement) {

        super();

        this.control = controllWrap;

        this.createControl();

        this.addEventListener();
    }

    public createControl(): void {

        const zoom = document.createElement('div');
        zoom.classList.add('conway__control-zoom');

        this.zoomIn = this.getControlElement('conway__control-zoom__zoom-in', 'zoom-in', 'search-plus');
        this.zoomOut = this.getControlElement('conway__control-zoom__zoom-out', 'zoom-out', 'search-minus');

        zoom.append(this.zoomIn);
        zoom.append(this.zoomOut);

        this.control.append(zoom);
    }

    public addEventListener(): void {

        const listen = (event: Event) => {

            const target = event.currentTarget as HTMLElement;

            let value = target.getAttribute('data-value') as string;

            this.setZoom(value);

        };

        this.zoomIn.addEventListener('click', listen);
        this.zoomOut.addEventListener('click', listen);

    }

    public getZoom(): number {
        console.log(this.zoomTween.getCurrent())
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

        if (false === this.zoomBound.isAbove(nextZoom)) {
            this.zoomIn.classList.remove('inactive');
        }
        else {
            this.zoomIn.classList.add('inactive');
        }

        if (false === this.zoomBound.isBelow(nextZoom)) {
            this.zoomOut.classList.remove('inactive');
        }
        else {
            this.zoomOut.classList.add('inactive');
        }

        this.zoomTween.setEnd(
            this.zoomBound.confine(nextZoom)
        );

    }

    public update(): void {
        this.zoomTween.update();
    }

}
