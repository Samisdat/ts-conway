
import { Canvas } from '../canvas';

describe.skip('Canvas', () => {

    let canvasContext: CanvasRenderingContext2D;

    beforeEach(() => {
        /*
        let canvas = $('<canvas>').get(0);
        canvas = canvas as HTMLCanvasElement;
        canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
        */
    });

    afterEach(() => {

        canvasContext = undefined;

    });


    it('can be created', () => {

        let canvas = new Canvas(
            canvasContext
        );

        expect(canvas).toBeInstanceOf(Canvas);

    });

    it('can get cxt', () => {

        let canvas = new Canvas(
            canvasContext
        );

        expect(canvas.ctx).toBe(canvasContext);

    });


});
