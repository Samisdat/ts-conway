
export default class Canvas {

    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    get width():number{
        return this.ctx.canvas.width;
    }

    get height():number{
        return this.ctx.canvas.height;
    }    
    
}