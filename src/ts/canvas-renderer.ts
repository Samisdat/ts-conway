import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Control from './control';

export default class CanvasRenderer {

    private $element:JQuery;
    private ctx:CanvasRenderingContext2D;

    private canvasWidth:number;
    private canvasHeight:number;

    public cellWidth:number = 40;
    public cellHeight:number = 40;

    private bgColors = {
        dark: '#000',
        light: '#fff'
    };
    private habitat: Habitat;

    private cols: number;
    private rows: number;

    private zero: Position;

    private control:Control;

    constructor($element: JQuery) {

        this.control = new Control($element.get(0));
        console.log(this.control)

        this.setCanvas($element);

        this.setHabitat();
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

        this.ctx = canvas.getContext('2d');

        this.canvasWidth = this.$element.width();
        this.canvasHeight = this.$element.height();

        // canvas is getting blury when these stunts are left
        $(canvas).css({
            width: this.canvasWidth + 'px',
            height: this.canvasHeight + 'px'
        });

        this.ctx.canvas.width = this.canvasWidth;
        this.ctx.canvas.height = this.canvasHeight;

        this.cols = this.canvasWidth / this.cellWidth;
        this.rows = this.canvasHeight/this.cellHeight;

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

    private chess():void{

        let color = '#FFAAAA';
        let force = false;

        for(let x = 0; x < this.cols; x += 1){

            for(let y = 0; y < this.rows; y += 1){
                color = ('#FFAAAA' === color) ? '#D46A6A' : '#FFAAAA';

                if(true === force){
                    force = false;
                    color = ('#FFAAAA' === color) ? '#D46A6A' : '#FFAAAA';                    
                }

                let tilePos = new Position(x, y);
                tilePos = tilePos.move(this.control.getPan());
                
                this.ctx.fillStyle = color;   
                this.ctx.fillRect(
                    tilePos.x * this.cellWidth,  
                    tilePos.y * this.cellHeight, 
                    this.cellWidth, 
                    this.cellHeight
                );

                
            }

            if(0 === this.cols % 2){
                force = true;
            }            
        }
    }
    public render():void{

        this.ctx.fillStyle = this.bgColors.light;   
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.chess();

        const positions:Position[] = this.get();

        this.ctx.fillStyle = this.bgColors.dark;   

        for(let position of positions){

            this.ctx.fillRect(
                position.x * this.cellWidth,
                position.y * this.cellHeight,
                this.cellWidth, this.cellHeight
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
        let moved = mapped.move(this.control.getPan());

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

        /*
        window.setInterval(() => {
            this.habitat.elapse();
            }
            ,1000
        );    
        */
    }
}