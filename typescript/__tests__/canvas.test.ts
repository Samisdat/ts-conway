/**
 * @jest-environment jsdom
 */
import {Canvas} from '@Conway/canvas';


describe('Canvas', () => {

    let canvasContext: CanvasRenderingContext2D;

    beforeEach(() => {

        const canvas = document.createElement('canvas') as HTMLCanvasElement;

        canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

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
