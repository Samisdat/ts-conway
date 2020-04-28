import {Position} from './position';
import {CellMatrix} from './CellMatrix';

export class Habitat {

    private readonly generationDuration: number;

    public matrix: CellMatrix;

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

        return this.matrix.has(position);

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

        const nextGeneration = new CellMatrix();

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

        for (let position of this.matrix.all()) {

            const livingNeighbours = this.countLivingNeighbours(position);

            if (2 === livingNeighbours || 3 === livingNeighbours) {

                nextGeneration.add(position);

            }

        }

        for (let position of this.matrix.all()) {

            const neighbours = position.getNeighbours();

            for (let neighbour of neighbours) {

                if (true === this.matrix.has(neighbour)) {
                    continue;
                }

                const livingNeighbours = this.countLivingNeighbours(neighbour);

                if (3 === livingNeighbours) {

                    nextGeneration.add(neighbour);

                }

            }

        }

        this.matrix = nextGeneration;

    }

    public elapse(): void {

        this.applyRules();

    }

    public getAllCells(): Position[] {

        return this.matrix.all();

    }

    get(): Position[] {

        return this.matrix.all();

    }

}
