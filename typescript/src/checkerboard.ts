import { GridCellType } from './grid-cell-types/grid-cell-type';
import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';

import Position from './position';

import Grid from './grid';

export default class Checkerboard{

    private darkColor: CheckerboardDark = new CheckerboardDark();
    private lightColor: CheckerboardLight = new CheckerboardLight();

    private startColors: GridCellType[][];

    constructor() {

        this.startColors = [
            [this.darkColor, this.lightColor],
            [this.lightColor, this.darkColor]
        ];
    }

    public update(grid:Grid): void {

        const end = new Position(
            Math.ceil((grid.getCols() -1) / 2),
            Math.ceil((grid.getRows() - 1)  / 2)
        );

        let start = new Position(
            -1 * end.x,
            -1 * end.y
        );

        let firstColorOfRow:GridCellType = this.lightColor;

        let color:GridCellType = firstColorOfRow;
        
        while(start.y < grid.getRows()/ 2){

            while(start.x < grid.getCols()/ 2){

                grid.getCell(start.x, start.y).setType(color);

                color = (this.lightColor === color) ? this.darkColor: this.lightColor;
                
                start = start.move(new Position(1, 0));
                
            }

            firstColorOfRow = (this.lightColor === firstColorOfRow) ? this.darkColor: this.lightColor;
            color = firstColorOfRow;

            start = new Position(-1 * end.x, start.y + 1);
            
        }
        
        /*
        let firstColorOfRow:GridCellType = this.lightColor;

        let color:GridCellType = firstColorOfRow;
    
        for(let row = 0; row < grid.getRows(); row += 1){
            
            for(let col = 0; col < grid.getCols(); col += 1){
                
                grid.getCell(col, row).setType(color);

                color = (this.lightColor === color) ? this.darkColor: this.lightColor;
                
            }
            firstColorOfRow = (this.lightColor === firstColorOfRow) ? this.darkColor: this.lightColor;
            color = firstColorOfRow;
        }
        */

    }

}