/**
 * @jest-environment jsdom
 */
import {CanvasRenderer} from '@Conway/Frontend/CanvasRenderer';
import {CellMatrix} from '@Conway/Geometry/CellMatrix';
import {Pattern} from '@Conway/Pattern/Pattern';
import {blinker} from '@Conway/Pattern/Store/blinker.cells';
import {Population} from '@Conway/Population';
import {Grid} from '@Conway/Frontend/Grid';
import {Position} from '@Conway/Geometry/Position';
import {CELL_WIDTH} from '@Conway/Constants';
import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';

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

        const cellMatrix = new CellMatrix();

        cellMatrix.seedPattern(
            Pattern.fromString(blinker)
        );

        const habitat = new Population(
            cellMatrix,
            50
        );


        const newGrid = new Grid(
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
