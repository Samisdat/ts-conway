import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Control from './control';
import Checkerboard from './checkerboard';
import Canvas from './canvas';

export default class CanvasRenderer {

    private $element:JQuery;

    private canvas:Canvas;

    private canvasWidth:number;
    private canvasHeight:number;

    public originalCellWidth:number = 20;
    public cellWidth:number;

    private habitat: Habitat;

    private cols: number;
    private rows: number;

    private zero: Position;

    private control:Control;

    private pan:Position;

    private panStep:number = 0.05;

    private background:Checkerboard;

    private bgColors = {
        dark: '#000',
        light: '#fff'
    };

    constructor($element: JQuery) {

        this.control = new Control($element.get(0));

        this.pan = this.control.getPan();

        this.cellWidth = this.control.getZoom() * this.originalCellWidth;

        this.setCanvas($element);

        this.setHabitat();

        this.background = new Checkerboard(this.canvas, '#D46A6A', '#FFAAAA');
    }

    private setCanvas($element: JQuery):void{

        if(undefined === $element.get(0)){
            throw new Error('jquery selector does not match an element');
        }

        this.$element = $element;

        if(0 === this.$element.find('canvas').length){
            this.$element.append($('<canvas>'));
        }

        const canvas = this.$element.find('canvas').get(0) as HTMLCanvasElement;

        const canvasWidth = this.$element.width();
        const canvasHeight = this.$element.height();

        const ctx = canvas.getContext('2d');
        ctx.canvas.width = canvasWidth;
        ctx.canvas.height =canvasHeight;

        this.canvas = new Canvas(ctx);

        // canvas is getting blury when these stunts are left
        $(canvas).css({
            width: canvasWidth + 'px',
            height: canvasHeight + 'px'
        });

        this.cols = this.canvas.width / this.cellWidth;
        this.rows = this.canvas.height / this.cellWidth;

        this.zero = new Position(
            Math.floor(this.cols/2),
            Math.floor(this.rows/2)
        );
        
        let panX = 0;
        let panY = 0;

        if(0 === this.rows % 2){
            panY = -0.5;
        }            

        if(0 === this.cols % 2){
            panX = -0.5;
        }             
         
        let pan = new Position(
            panX,
            panY
        );        

        pan = new Position(
            0,
            0
        );

        this.control.overwritePan(pan);        
    }

    public update():void{
        let actualPan = this.control.getPan();

        let actualZoom = this.control.getZoom();

        this.cellWidth = this.control.getZoom() * this.originalCellWidth;
        
        if(false === actualPan.compare(this.pan)){

            var moveX = 0;
            var moveY = 0;

            if(this.pan.x > actualPan.x){
                moveX = -1 * this.panStep;
            }
            else if(this.pan.x < actualPan.x){
                moveX = this.panStep;
            }

            if(this.pan.y > actualPan.y){
                moveY = -1 * this.panStep;
            }
            else if(this.pan.y < actualPan.y){
                moveY = this.panStep;
            }


            const move = new Position(moveX, moveY);

            this.pan = this.pan.move(move);

            this.pan = new Position(
                Math.round(this.pan.x * 1000) / 1000,
                Math.round(this.pan.y * 1000) / 1000,
            );

        }
        this.background.update(this.cellWidth, this.pan);
    }

    public render():void{

        this.background.render();

        const positions:Position[] = this.get();

        this.canvas.ctx.fillStyle = this.bgColors.dark;   

        for(let position of positions){

            this.canvas.ctx.fillRect(
                position.x * this.cellWidth,
                position.y * this.cellWidth,
                this.cellWidth, this.cellWidth
            );
        }

    }    
    
    public getHabitat(): Habitat {
        return this.habitat;
    }    

    private setHabitat():void {
        this.habitat = new Habitat();
    }    
    
    public getPan(): Position {
        return this.control.getPan();
    }

    public setPan(position: Position): void {
        this.control.overwritePan(position);
    } 

    public panBy(position: Position): void {
        this.control.getPan().move(position);
    }    
    public seed(position:Position):void {
        position = this.reverseMap(position);
        this.habitat.seed(position);
    }

    private reverseMap(position:Position):Position{

        position = position.move(this.zero.inverse());
        position = position.move(this.control.getPan().inverse());

        return position;
    }

    public map(position:Position):Position{

        let mapped = this.zero.move(position);
        let moved = mapped.move(this.pan);

        return moved;
    }

    public get():Position[] {

        var mapped:Position[] = [];     

        var living:Position[] = this.habitat.get();

        for(let position of living){
            let map = this.map(position);

            mapped.push(map);
            
        }

        return mapped;
    }

    public elapse():void {

        window.setInterval(() => {
            this.habitat.elapse();
            }
            ,600
        );    
    }
}