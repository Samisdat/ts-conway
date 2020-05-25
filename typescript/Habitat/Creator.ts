import {Position} from '@Conway/Geometry/Position';
import {Dimension} from '@Conway/Habitat/Dimension';

export class Creator {

    public readonly canvasWidth: number;
    public readonly canvasHeigth: number;
    public readonly originalCellWidthAndHeight: number;
    public readonly cellWidthAndHeight: number;
    public readonly pan: Position;

    public readonly sourcePosition: Position;
    public readonly offset: Position;

    public readonly zoom: number;

    private dimension: Dimension;

    constructor(
        canvasWidth: number,
        canvasHeight: number,
        cellWidthAndHeight: number,
        pan: Position,
        zoom: number
    ) {
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeight;
        this.originalCellWidthAndHeight = cellWidthAndHeight;
        this.pan = pan;
        this.zoom = zoom;

        this.offset = new Position(
            this.pan.x % 1,
            this.pan.y % 1,

        );

        const sourcePosition = this.pan.clone().move(this.offset.inverse());
        this.sourcePosition = new Position(
            sourcePosition.x,
            sourcePosition.y
        );

        this.cellWidthAndHeight = this.originalCellWidthAndHeight * this.getZoom();

        this.setDimension();

    }

    private setDimension(): void{

        let rows = Math.ceil(this.canvasWidth / this.cellWidthAndHeight);

        if (0 === rows % 2) {
            rows += 1;
        }

        if (0 !== this.offset.x) {
            rows += 2;
        }

        let cols = Math.ceil(this.canvasHeigth / this.cellWidthAndHeight);

        if (0 === cols % 2) {
            cols += 1;
        }

        if (0 !== this.offset.y) {
            cols += 2;
        }

        this.dimension = new Dimension(rows, cols);

    }

    public getRows(): number {
        return this.dimension.getRows();
    }

    public getCols(): number {
        return this.dimension.getCols();
    }

    public getPan(): Position {
        return this.pan;
    }

    public getSourcePosition(): Position {
        return this.sourcePosition;
    }

    public getOffset(): Position {
        return this.offset.inverse();
    }

    public getZoom(): number {
        return this.zoom;
    }

    public getDimension(): Dimension {
        return this.dimension;
    }

}
