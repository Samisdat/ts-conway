/**
 * @jest-environment jsdom
 */
import {CanvasRenderer} from '@Conway/canvas-renderer';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Habitat} from '@Conway/Conway/Habitat';
import {Grid} from '@Conway/Grid';
import {GridDimension} from '@Conway/Grid/GridDimension';
import {Position} from '@Conway/Conway/Position';
import {CELL_WIDTH} from '@Conway/Constants';
import {Pattern} from '@Conway/Conway/Pattern';
import {blinker} from '@Conway/Patterns/blinker.cells';

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

        const habitat = new Habitat(
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
