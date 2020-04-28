import {Position} from './position';
import {Cell} from './cell';
import {CellMatrix} from './CellMatrix';

export class Habitat {

    private readonly generationDuration: number;

    public readonly matrix: CellMatrix;

    constructor(
        matrix: CellMatrix,
        generationDuration: number
    ) {

        this.matrix = matrix;

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

        if (false === this.matrix.has(position)) {
            return false;
        }

        const cell = this.matrix.get(position) as Cell;

        return cell.isAlive();

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
         *  That's the first loop
         *
         *  To check if any death cells will be birth, we count the living neighbour of all cells neighbours
         *  That's the second loop
         */

        for (let cell of this.matrix.all()) {

            let livingNeighbours = this.countLivingNeighbours(cell.position);

            if (2 === livingNeighbours || 3 === livingNeighbours) {
                continue;
            }

            cell.kill();

        }

        let createCellsAt: Position[] = [];

        for (let cell of this.matrix.all()) {

            let neighbours = cell.position.getNeighbours();

            for (let neighbour of neighbours) {

                let livingNeighbours = this.countLivingNeighbours(neighbour);

                if (3 === livingNeighbours && false === this.matrix.has(neighbour)) {
                    createCellsAt.push(neighbour);
                }

            }
        }

        for (let position of createCellsAt) {

            this.matrix.add(new Cell(position));

        }

    }

    private removeBodies(): void {

        let numberLivingCells = 0;

        for (let cell of this.matrix.all()) {
            if (true !== cell.isAlive()) {
                this.matrix.remove(cell.position);
            }
            else{
                numberLivingCells += 1;
            }
        }

        console.log(numberLivingCells);

    }

    public elapse(): void {

        this.applyRules();



        for (let cell of this.matrix.all()) {
            cell.elapse();
        }

        this.removeBodies();

    }

    public getAllCells(): Cell[] {

        return this.matrix.all();

    }

    get(): Position[] {

        return this.matrix.all().map((cell: Cell) => {
            return cell.position;
        });

    }

}
