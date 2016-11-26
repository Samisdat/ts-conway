import * as $ from 'jquery';

import Position from './position';
import Habitat from './habitat';
import Control from './control';
import Checkerboard from './checkerboard';
import Canvas from './canvas';

import { Renderable } from './renderable';

export default class Frontend implements Renderable {

    private $element: JQuery;

    private canvas: Canvas;

    private canvasWidth: number;
    private canvasHeight: number;

    public originalCellWidth: number = 20;
    public cellWidth: number;

    private habitat: Habitat;

    private cols: number;
    private rows: number;

    private zero: Position;

    private control: Control;

    private checkerboard: Checkerboard;

    private offset: Position = new Position(0, 0);

    private bgColors = {
        dark: '#000',
        light: '#fff'
    };

    constructor($element: JQuery) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        this.$element = $element;

        if (0 === this.$element.find('canvas').length) {
            this.$element.append($('<canvas>'));
        }

        this.control = new Control(
            $element.get(0),
            this.originalCellWidth
        );

        this.cellWidth = this.control.getZoom() * this.originalCellWidth;

        this.setCanvas($element);

        this.setHabitat();

        this.checkerboard = new Checkerboard(
            this.canvas,
            this.control,
            this.originalCellWidth,
            '#D46A6A',
            '#FFAAAA'

        );

    }

    private center(){

        this.cols = this.canvas.width / this.cellWidth;
        this.rows = this.canvas.height / this.cellWidth;

        this.zero = new Position(
            Math.floor(this.cols / 2),
            Math.floor(this.rows / 2)
        );

        let position = new Position(
            (this.cols % 1) / 2,
            (this.rows % 1) / 2
        );

        if(0 === Math.floor(this.rows) % 2){
            const correct = new Position(0, -0.5);
            position = position.move(correct); 
        }

        if(0 === Math.floor(this.cols) % 2){
            const correct = new Position(-0.5, 0);
            position = position.move(correct); 
        }

        this.offset = position;

    }

    private setCanvas($element: JQuery): void {

        const canvasWidth = this.$element.width();
        const canvasHeight = this.$element.height();

        const canvas = this.$element.find('canvas').get(0) as HTMLCanvasElement;

        const ctx = canvas.getContext('2d');
        ctx.canvas.width = canvasWidth;
        ctx.canvas.height = canvasHeight;

        this.canvas = new Canvas(ctx);

        // canvas is getting blury when these stunts are left
        $(canvas).css({
            width: canvasWidth + 'px',
            height: canvasHeight + 'px'
        });

        this.center();
        
    }

    public resize():void{
        console.log(this.$element.width(), this.$element.height());
        this.setCanvas(this.$element);
    }

    private updateZoom(): void {

        let cols = this.cols;
        let rows = this.rows;
        let actualZoom = this.control.getZoom();

        this.cellWidth = actualZoom * this.originalCellWidth;
        this.center();
    }

    public update(): void {

        this.control.update();

        this.updateZoom();

        this.checkerboard.update(this.zero, this.offset);

    }

    public render(): void {
        this.checkerboard.render();

        const positions: Position[] = this.get();

        this.canvas.ctx.fillStyle = this.bgColors.dark;

        for (let position of positions) {

            this.canvas.ctx.fillRect(
                position.x * this.cellWidth,
                position.y * this.cellWidth,
                this.cellWidth, this.cellWidth
            );
        }

        this.canvas.ctx.fillStyle = '#0f0';

        this.canvas.ctx.fillRect(
            0,
            (this.canvas.height - 2)/ 2,
            this.canvas.width, 
            2
        );

        this.canvas.ctx.fillRect(
            (this.canvas.width - 2 )/2,
            0,
            2,
            this.canvas.height
        );



    }

    public getHabitat(): Habitat {
        return this.habitat;
    }

    private setHabitat(): void {
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

    public seed(position: Position): void {
        position = this.reverseMap(position);
        this.habitat.seed(position);
    }

    private reverseMap(position: Position): Position {

        position = position.move(this.zero.inverse());
        position = position.move(this.control.getPan().inverse());

        return position;
    }

    public map(position: Position): Position {

        let mapped = this.zero.move(position);
        let moved = mapped.move(this.control.getPan());
        moved = moved.move(this.offset);

        return moved;
    }

    public get(): Position[] {

        let mapped: Position[] = [];

        let living: Position[] = this.habitat.get();

        for (let position of living) {
            let map = this.map(position);

            mapped.push(map);

        }

        return mapped;
    }

    public elapse(): void {

        window.setInterval(() => {
            this.habitat.elapse();
        }
            , 200
        );
    }

}