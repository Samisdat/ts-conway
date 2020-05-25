/**
 * @jest-environment jsdom
 */
import {CanvasRenderer} from '@Conway/Frontend/CanvasRenderer';
import {Pattern} from '@Conway/Pattern/Pattern';
import {blinker} from '@Conway/Pattern/Store/blinker.cells';
import {Population} from '@Conway/Population';
import {Habitat} from '@Conway/Habitat';
import {Position} from '@Conway/Geometry/Position';
import {CELL_WIDTH} from '@Conway/Constants';
import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';
import {seedPattern} from '@Conway/Pattern/seedPattern';
import {Matrix} from '@Conway/Geometry/Matrix';

describe('CanvasRenderer', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

    });

    test('can be created', () => {

        const canvasRenderer = new CanvasRenderer(
            element
        );

        expect(canvasRenderer).toBeInstanceOf(CanvasRenderer);

    });

    test('update and render with', () => {

        const canvasRenderer = new CanvasRenderer(
            element
        );

        const matrix = new Matrix();

        seedPattern(
            matrix,
            Pattern.fromString(blinker)
        );

        const habitat = new Population(
            matrix,
            50
        );

        const newGrid = new Habitat(
            habitat,
            new GridDimension(10, 10),
            new Position(0, 0),
            new Position(0, 0)
        );

        canvasRenderer.update(CELL_WIDTH * 1, newGrid);
        canvasRenderer.render();

        expect('Would be could to have an image snapshot matcher').toBe('Would be could to have an image snapshot matcher');

    });

    test('can be created with already having a canvas element', () => {

        element.append(
            document.createElement('canvas')
        );

        const canvasRenderer = new CanvasRenderer(
            element
        );

        expect(canvasRenderer).toBeInstanceOf(CanvasRenderer);

    });


});
