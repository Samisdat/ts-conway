import * as $ from 'jquery';

import Grid from './grid';
import CheckerBoard from './checkerboard';
import CanvasRenderer from './canvas-renderer';
import Control from './control';
import Habitat from './habitat';
import Patterns from './patterns';
import Position from './position';
import LivingCell from '../src/grid-cell-types/living-cell';

export default class Frontend {

    private wrapper: JQuery;
    private control: Control;

    public originalCellWidth: number = 100;
    public cellWidth: number;

    private habitat: Habitat = new Habitat();

    private cols: number;
    private rows: number;

    private zero: Position;
    private offset: Position;

    private grid: Grid;

    private checkerBoard:CheckerBoard;
    private canvasRenderer:CanvasRenderer;

    constructor($element: JQuery) {

        if (undefined === $element.get(0)) {
            throw new Error('jquery selector does not match an element');
        }

        const patterns = new Patterns();
        this.habitat.seedPattern(patterns.get('blinker'));


        this.wrapper = $element;

        this.checkerBoard = new CheckerBoard();

        this.canvasRenderer = new CanvasRenderer(
            this.wrapper
        );

        this.cellWidth = this.originalCellWidth;

        this.control = new Control(
            this.wrapper.get(0),
            this.originalCellWidth
        );

        this.grid = new Grid(
            this.wrapper.width(), 
            this.wrapper.height(), 
            this.cellWidth * this.control.getZoom() 
        );          

        this.loop();
        
    }

    private center(){

        this.cols = this.wrapper.width() / this.cellWidth;
        this.rows = this.wrapper.height() / this.cellWidth;

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

        this.grid = new Grid(
            this.wrapper.width(), 
            this.wrapper.height(), 
            this.cellWidth * this.control.getZoom() 
        );          

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

    private update(): void{
        /*
        const cells = this.get();

        for(let cell of cells){
            const position = new Position(
                Math.floor(cell.x),
                Math.floor(cell.y)
            );
            
            this.grid.getCell(position.x, position.y).setType(new LivingCell());

        }
        */
    }

    public loop(){

        this.control.update();

        this.center();
        
        this.checkerBoard.update(this.grid);

        this.update();


        this.canvasRenderer.update(this.cellWidth, this.grid);
        this.canvasRenderer.render();

        window.requestAnimationFrame(() => {
            this.loop();
        });

    }

}