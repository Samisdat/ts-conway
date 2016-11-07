import * as $ from 'jquery';

import Position from './position';

export default class CanvasRenderer {

    private $element;
    private ctx;

    private canvasWidth:number = 500;
    private canvasHeight:number = 400;

    public cellWidth:number;
    public cellHeight:number;

    private bgColors = {
        dark: '#000',
        light: '#fff'
    };

    constructor($element: JQuery) {

        this.setCanvas($element);

        console.log(this.ctx)
    }

    private setCanvas($element: JQuery):void{

        if(undefined === $element.get(0)){
            throw new Error('jquery selector does not match an element');
        }

        this.$element = $element;

        if(0 === this.$element.find('canvas').length){
            this.$element.append($('<canvas>'));
        }

        this.ctx = this.$element.find('canvas').get(0).getContext('2d');

    }

    public render():void{

        this.ctx.fillStyle = this.bgColors.dark;   
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    }    
    
}