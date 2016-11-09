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

        const top = $('<div>');
        top.addClass('top');
        top.append($('<i class="fa fa-arrow-up">'));
        $(pan).append(top);

        const bottom = $('<div>');
        bottom.addClass('bottom');
        bottom.append($('<i class="fa fa-arrow-down">'));
        $(pan).append(bottom);

        const left = $('<div>');
        left.addClass('left');
        left.append($('<i class="fa fa-arrow-left">'));
        $(pan).append(left);

        const right = $('<div>');
        right.addClass('right');
        right.append($('<i class="fa fa-arrow-right">'));
        $(pan).append(right);

        $(this.control).append(pan);

    }

    private createZoomControl():void{

        const zoom = $('<div>');
        zoom.addClass('zoom');

        const zoomIn = $('<div>');
        zoomIn.addClass('zoom-in');
        zoomIn.append($('<i class="fa fa-search-plus">'));
        $(zoom).append(zoomIn);

        const zoomOut = $('<div>');
        zoomOut.addClass('zoom-out');
        zoomOut.append($('<i class="fa fa-search-minus">'));
        $(zoom).append(zoomOut);

        $(this.control).append(zoom);

    }

    public getZoom():number{
        return this.zoom;
    }

    public getPan():Position{
        return this.pan;
    }

}