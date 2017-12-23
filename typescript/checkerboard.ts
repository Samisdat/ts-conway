import { GridCellType } from './grid-cell-types/grid-cell-type';
import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';

import Position from './position';

import Grid from './grid';

export default class Checkerboard {

    private darkColor: CheckerboardDark = new CheckerboardDark();
    private lightColor: CheckerboardLight = new CheckerboardLight();

    private startColors: GridCellType[][];

    constructor() {

        this.startColors = [
            [this.darkColor, this.lightColor],
            [this.lightColor, this.darkColor]
        ];
    }

    public update(grid: Grid): void {

        const cells = grid.getCells();

        for (let cell of cells) {
            const x = cell.x;
            const y = cell.y;

            cell.setType(this.darkColor);

            if (0 === y % 2) {
                if (0 === x % 2) {
                    cell.setType(this.lightColor);
                }
            }

            if (0 !== y % 2) {
                if (0 !== x % 2) {
                    cell.setType(this.lightColor);
                }
            }
        }

    }

}