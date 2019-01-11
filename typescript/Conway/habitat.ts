import { Position } from './position';
import { Cell } from './cell';
import { LivingCell } from './livingcell';
import { Pattern } from './pattern';
import {Config} from '../Config';

export class Habitat {

    private generationDuration: number;

    private cells: Cell[] = [];

    constructor(generationDuration: number) {

        this.generationDuration = generationDuration;

    }

    public startAging(): void {

        setInterval(
            () => {
                this.elapse();
            },
            this.generationDuration
        );

    }

    private isLiving(position: Position): Boolean {

        let isLiving = false;

        for (let cell of this.cells) {

            if (cell.x === position.x && cell.y === position.y) {

                if (true === cell.isAlive()) {
                    isLiving = true;
                }

                break;
            }
        }

        return isLiving;
    }

    private countLivingNeighbours(position: Position): number {

        let livingNeighbours: number = 0;

        let neighbours: Position[] = position.getNeighbours();

        for (let neighbour of neighbours) {
            let isLiving = this.isLiving(neighbour);

            if (true === isLiving) {
                livingNeighbours += 1;
            }

        }

        return livingNeighbours;

    }

    private applyRules(): void {
        /**
         * there are four rules
         * 1) Any live cell with fewer than two live neighbours dies, as if caused by under-population.
         * 2) Any live cell with two or three live neighbours lives on to the next generation.
         * 3) Any live cell with more than three live neighbours dies, as if by over-population.
         * 4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
         *
         *  All rules dealing with living cells can be handled by kill all cells that don't have two or three neighbours
         *  Thats the first loop
         *
         *  To check if any death cells will be birth, we count the living neighbour of all cells neighbours
         *  Thats the second loop
         */

        for (let cell of this.cells) {

            let livingNeighbours = this.countLivingNeighbours(cell.position);

            if (2 === livingNeighbours || 3 === livingNeighbours) {
                continue;
            }

            cell.kill();

        }

        let createCellsAt = {};

        for (let cell of this.cells) {

            let neighbours = cell.position.getNeighbours();

            for (let neighbour of neighbours) {

                let livingNeighbours = this.countLivingNeighbours(neighbour);

                if (3 === livingNeighbours) {
                    createCellsAt[neighbour.x + '-' + neighbour.y] = neighbour;
                }

            }
        }

        for (let pos in createCellsAt) {
            let positionOfNewCell: Position = createCellsAt[pos];
            this.cells.push(new Cell(positionOfNewCell));
        }

    }

    private removeBodies(): void {

        let cleaned: Cell[] = [];

        for (let cell of this.cells) {
            if (true === cell.isAlive()) {
                cleaned.push(cell);
            }
        }

        this.cells = cleaned;

    }

    public elapse(): void {

        this.applyRules();

        for (let cell of this.cells) {
            cell.elapse();
        }

        this.removeBodies();

    }


    public seed(position: Position): void {
        this.cells.push(new LivingCell(position));
    }

    public seedPattern(pattern: Pattern): void {

        const positions = pattern.get();

        for (let position of positions) {
            this.cells.push(new LivingCell(position));
        }

    }

    public getAllCells(): Cell[] {

        return this.cells;

    }

    get(): Position[] {

        let living: Position[] = [];

        for (let cell of this.cells) {
            if (true === cell.isAlive()) {
                living.push(cell.position);
            }
        }

        return living;
    }

}