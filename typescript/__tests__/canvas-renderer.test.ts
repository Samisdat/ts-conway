/**
 * @jest-environment jsdom
 */
import {CanvasRenderer} from '@Conway/canvas-renderer';
import {Patterns} from '@Conway/Conway/Patterns';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Habitat} from '@Conway/Conway/Habitat';
import {Grid} from '@Conway/Grid';
import {GridDimension} from '@Conway/Grid/GridDimension';
import {Position} from '@Conway/Conway/Position';
import {CELL_WIDTH} from '@Conway/Constants';

describe('CanvasRenderer', () => {

    let element: HTMLElement;

    beforeEach(() => {

        element = document.createElement('div');

    });

    test('can be created with [debug=false]', () => {

        let canvasRenderer = new CanvasRenderer(
            element,
            false
        );

        expect(canvasRenderer).toBeInstanceOf(CanvasRenderer);

    });

    test('can be created with [debug=true]', () => {

        let canvasRenderer = new CanvasRenderer(
            element,
            true
        );

        expect(canvasRenderer).toBeInstanceOf(CanvasRenderer);

    });

    test('update and render with [debug=true]', () => {

        let canvasRenderer = new CanvasRenderer(
            element,
            true
        );

        const patterns = new Patterns();

        const cellMatrix = new CellMatrix();

        cellMatrix.seedPattern(patterns.get('blinker'));

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

    test('can be created with [debug=undefined]', () => {

        let canvasRenderer = new CanvasRenderer(
            element
        );

        expect(canvasRenderer).toBeInstanceOf(CanvasRenderer);

    });

    test('can be created with already having a canvas element', () => {

        element.append(
            document.createElement('canvas')
        );

        let canvasRenderer = new CanvasRenderer(
            element
        );

        expect(canvasRenderer).toBeInstanceOf(CanvasRenderer);

    });


});
