import { Position } from '@Conway/position';
import { IntegerPosition } from '@Conway/IntegerPosition';

export class GridCreator {


    public readonly canvasWidth: number;
    public readonly canvasHeigth: number;
    public readonly originalCellWidthAndHeight: number;
    public readonly cellWidthAndHeight: number;
    public readonly pan: Position;

    public readonly sourcePosition: Position;
    public readonly offset: Position;

    public readonly zoom: number;

    private rows: number;
    private cols: number;

    constructor(
        canvasWidth: number,
        canvasHeigth: number,
        cellWidthAndHeight: number,
        pan: Position,
        zoom: number
    ) {
        this.canvasWidth = canvasWidth;
        this.canvasHeigth = canvasHeigth;
        this.originalCellWidthAndHeight = cellWidthAndHeight;
        this.pan = pan;
        this.zoom = zoom;

        this.offset = new Position(
            this.pan.x % 1,
            this.pan.y % 1,

        );

        const sourcePosition = this.pan.clone().move(this.offset.inverse());
        this.sourcePosition = new IntegerPosition(
            sourcePosition.x,
            sourcePosition.y
        );

        this.cellWidthAndHeight = this.originalCellWidthAndHeight * this.getZoom();

        this.rows = Math.ceil(this.canvasWidth / this.cellWidthAndHeight);

        if (0 === this.rows % 2) {
            this.rows += 1;
        }

        if (0 !== this.offset.x) {
            this.rows += 2;
        }

        this.cols = Math.ceil(this.canvasHeigth / this.cellWidthAndHeight);

        if (0 === this.cols % 2) {
            this.cols += 1;
        }

        if (0 !== this.offset.y) {
            this.cols += 2;
        }

    }

    public getRows(): number {
        return this.rows;
    }

    public getCols(): number {
        return this.cols;
    }

    public getPan(): Position {
        return this.pan;
    }

    public getSourcePosition(): IntegerPosition {
        return this.sourcePosition;
    }

    public getOffset(): Position {
        return this.offset.inverse();
    }

    public getZoom(): number {
        return this.zoom;
    }

}