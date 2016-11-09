import * as $ from 'jquery';

import Position from './position';

export default class Control {

    private readonly canvasWrap:HTMLElement; 

    private control:JQuery;

    private maxZoom: number = 5;
    private minZoom: number = 0.5;

    private zoom: number = 1;

    private minPanTop: number = -30;
    private minPanBottom: number = 30;
    private minPanLeft: number = -30;
    private minPanRight: number = 30;

    private pan:Position = new Position(0, 0); 

    private maxZoom: number = 5;
    private minZoom: number = 0.5;

    private zoom: number = 1;

    private minPanTop: number = -30;
    private minPanBottom: number = 30;
    private minPanLeft: number = -30;
    private minPanRight: number = 30;

    private pan:Position = new Position(0, 0); 

    constructor(canvasWrap: HTMLElement) {

        this.canvasWrap = canvasWrap;

        this.createControl();
        this.createPanControl();
        this.createZoomControl();

    }

    private createControl():void{
        
        this.control = $('<div>');
        this.control.addClass('control');

        $(this.canvasWrap).append(this.control);

    }

    private getControlElement(action:string, value:string, icon:string):JQuery{
        const element = $('<div>');
        element.addClass(value);
        element.attr('data-action', action);
        element.attr('data-value', value);
        element.append($('<i class="fa fa-' +  icon+ '">'));

        return element
    }

    private createPanControl():void{

        const pan = $('<div>');
        pan.addClass('pan');

        $(pan).append(this.getControlElement('pan', 'top', 'arrow-up'));
        $(pan).append(this.getControlElement('pan', 'bottom', 'arrow-down'));
        $(pan).append(this.getControlElement('pan', 'left', 'arrow-left'));
        $(pan).append(this.getControlElement('pan', 'right', 'arrow-right'));
    }

    private createZoomControl():void{

        const zoom = $('<div>');
        zoom.addClass('zoom');

        $(zoom).append(this.getControlElement('zoom', 'zoom-in', 'search-plus'));
        $(zoom).append(this.getControlElement('zoom', 'zoom-out', 'search-minus'));

    }

    public getZoom():number{
        return this.zoom;
    }

    public getPan():Position{
        return this.pan;
    }

}