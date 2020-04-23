import { Position } from '../Conway/position';

import { ZoomControl } from './ControlZoom';

import { PanControl } from './ControlPan';

export class MainControl {

    private readonly canvasWrap: Element;

    private readonly originalCellWidth: number;

    private control: HTMLElement;

    private zoomControl: ZoomControl;

    private panControl: PanControl;

    constructor(canvasWrap: Element, originalCellWidth: number) {

        this.canvasWrap = canvasWrap;

        this.originalCellWidth = originalCellWidth;

        this.createControl();
        this.createZoomControl();
        this.createPanControl();

    }

    private createControl(): void {

        this.control = document.createElement('div');
        this.control.classList.add('control');

        this.canvasWrap.append(this.control);

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
