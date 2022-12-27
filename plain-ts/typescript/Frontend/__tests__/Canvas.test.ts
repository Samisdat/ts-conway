/**
 * @jest-environment jsdom
 */
import {Canvas} from '../Canvas';

describe('Canvas', () => {

    let canvasContext: CanvasRenderingContext2D;

    beforeEach(() => {

        const canvas = document.createElement('canvas') as HTMLCanvasElement;

        canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

    });

    test('can be created', () => {

        const canvas = new Canvas(
            canvasContext
        );

        expect(canvas).toBeInstanceOf(Canvas);

    });

    test('can get cxt', () => {

        const canvas = new Canvas(
            canvasContext
        );

        expect(canvas.ctx).toBe(canvasContext);

    });


});
