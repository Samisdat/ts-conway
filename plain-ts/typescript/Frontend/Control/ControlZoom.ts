import {ZOOM_TWEEN_STEPS} from '@Conway/Constants';
import {Tween} from '@Conway/Tween/Tween';
import {Control, createControlElement} from '@Conway/Frontend/Control/Control';
import {Bound} from '@Conway/Geometry/Bound';

type ZoomMode = 'in' | 'out';
const ZOOM_MODES: ZoomMode[] = ['in', 'out'];


export class ZoomControl extends Control {

    private zoomTween: Tween = new Tween(1, ZOOM_TWEEN_STEPS);

    private zoomBound: Bound = new Bound(0.4, 1.6);

    constructor(controllWrap: HTMLElement) {

        super();

        this.control = controllWrap;

        this.createControl();

        this.addEventListener();
    }

    public createControl(): void {

        const zoom = document.createElement('div');
        zoom.classList.add('conway__control-zoom');

        const zoomIn = createControlElement(['conway__control-zoom__element', 'conway__control-zoom__in'], 'in', 'search-plus');
        const zoomOut = createControlElement(['conway__control-zoom__element', 'conway__control-zoom__out'], 'out', 'search-minus');

        zoom.append(zoomIn);
        zoom.append(zoomOut);

        this.control.append(zoom);
    }

    private addEventListener(): void {

        const listen = (event: Event) => {

            let target = event.target as HTMLElement;

            if (true === target.classList.contains('fa')) {

                target = target.parentElement as HTMLElement;

            }

            const value = target.getAttribute('data-value') as ZoomMode;

            if (true === ZOOM_MODES.includes(value)) {
                this.setZoom(value);
            }

        };

        this.control.addEventListener('click', listen);

    }

    public getZoom(): number {

        return this.zoomTween.getCurrent();
    }

    public setZoom(mode: ZoomMode) {

        let modifier = 0.2;

        if ('out' === mode) {
            modifier = -1 * modifier;
        }

        const nextZoom = Math.round((this.zoomTween.getEnd() + modifier) * 10) / 10;

        this.updateState(mode, this.zoomBound.confine(nextZoom));

        this.zoomTween.setEnd(
            this.zoomBound.confine(nextZoom)
        );

    }

    private updateState(mode: ZoomMode, zoom: number): void {

        const possibleZooms: ZoomMode[] = [];

        if ('in' === mode && this.zoomBound.isWithin(zoom + 0.2)) {

            possibleZooms.push('in');

        }

        if ('out' === mode && this.zoomBound.isWithin(zoom - 0.2)) {

            possibleZooms.push('out');
        }

        super.updateUiSate('zoom', ZOOM_MODES, possibleZooms);

    }

    public update(): void {
        this.zoomTween.update();
    }

}
