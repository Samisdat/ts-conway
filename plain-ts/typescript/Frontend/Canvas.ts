
export class Canvas {

    private canvasContext: CanvasRenderingContext2D;

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.canvasContext = canvasContext;
    }

    get ctx(): CanvasRenderingContext2D {
        return this.canvasContext;
    }

    get width(): number {
        return this.canvasContext.canvas.width;
    }

    get height(): number {
        return this.canvasContext.canvas.height;
    }

}