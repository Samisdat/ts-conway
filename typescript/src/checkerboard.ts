import { GridCellType } from './grid-cell-types/grid-cell-type';
import CheckerboardDark from './grid-cell-types/checkerboard-dark';
import CheckerboardLight from './grid-cell-types/checkerboard-light';

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

    }

}