import * as $ from 'jquery';

import Position from './position';
import PositionTween from './positiontween';

export default class Control {

    private readonly canvasWrap:HTMLElement; 

    private control:JQuery;

    private maxZoom: number = 10;
    private minZoom: number = 0.2;

    private zoom: number = 1;

    private minPanTop: number = -30;
    private minPanBottom: number = 30;
    private minPanLeft: number = -30;
    private minPanRight: number = 30;

    private positionTween:PositionTween = new PositionTween(
        new Position(0, 0)
    );

    constructor(canvasWrap: HTMLElement) {

        this.canvasWrap = canvasWrap;

        this.createControl();
        this.createPanControl();
        this.createZoomControl();

        this.addEventListener();
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

        this.control.append(pan);
    }

    private createZoomControl():void{

        const zoom = $('<div>');
        zoom.addClass('zoom');

        $(zoom).append(this.getControlElement('zoom', 'zoom-in', 'search-plus'));
        $(zoom).append(this.getControlElement('zoom', 'zoom-out', 'search-minus'));

        this.control.append(zoom);
    }

    private addEventListener():void{

        const control = this;

        $(this.canvasWrap).on('click', '.control div[data-action]', function(){

            let action = $(this).data('action');
            let value = $(this).data('value');

            if('pan' === action){
                control.setPan(value);
            }
            else if('zoom' === action){
                control.setZoom(value);
            }
        });
    }

    public getZoom():number{
        return this.zoom;
    }
    public setZoom(mode:string){

        let modifier = 1;

        if(1 > this.zoom){
            modifier = 0.1
        }
        else if(1 === this.zoom && 'zoom-out' === mode){
            modifier = 0.1
        }

        if('zoom-out' === mode){
            modifier = -1 * modifier;
        }

        if(this.minZoom <= this.zoom + modifier && this.maxZoom >= this.zoom + modifier){
            this.zoom = Math.round( (this.zoom + modifier) * 10 ) / 10;;
        }

    }

    public getPan():Position{
        return this.positionTween.getCurrent();
    }

    public overwritePan(position:Position):void{
        this.positionTween.overwrite(position);
    }

    public setPan(mode:string):void{

        let panX = 0;
        let panY = 0;

        if('top'=== mode){
            panY = -1;
        }
        else if('bottom'=== mode){
            panY = 1;            
        }
        else if('left'=== mode){
            panX = -1;
        }
        else if('right'=== mode){
            panX = 1;            
        }

        if(this.minPanTop > this.positionTween.getEnd().y + panY){
            panY = 0;
        }
        if(this.minPanLeft > this.positionTween.getEnd().x + panX){
            panX = 0;
        }

        if(this.minPanBottom < this.positionTween.getEnd().y + panY){
            panY = 0;
        }
        if(this.minPanRight < this.positionTween.getEnd().x + panX){
            panX = 0;
        }

        const panBy = new Position(panX, panY);

        const panTo = this.positionTween.getEnd().move(panBy);

        this.positionTween.setEnd(panTo);
    }

    public update():void{
        this.positionTween.update();

        console.log(this.positionTween.getStepsDone(), this.positionTween.getCurrent().x, this.positionTween.getStart().x, this.positionTween.getEnd().x)
        
    }

}