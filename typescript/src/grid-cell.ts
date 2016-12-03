import { GridCellType } from './grid-cell-types/grid-cell-type';
import NoType from './grid-cell-types/no-type';

import Position from './position';

export default class GridCell {

    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    private type:GridCellType = new NoType();

    constructor(position: Position, cellDimension: number) {

        this._x = position.x;
        this._y = position.y;

        if(0 < this._x){
            this._width = cellDimension;
        }
        else{
            this._width = cellDimension + position.x;
            this._x = 0;
        }

        if(0 < this._y){
            this._height = cellDimension;
        }
        else{
            this._height = cellDimension + position.y;
            this._y = 0;
        }

    }

    public setType(type:GridCellType):void{
        this.type = type;
    }

    public getType():GridCellType{
        return this.type;
    }

    public getColor():string{
        return this.type.toHex();
    }

    get width():number{
        return this._width;
    }
    get height():number{
        return this._height;
    }
    get x():number{
        return this._x;
    }
    get y():number{
        return this._y;
    }
}