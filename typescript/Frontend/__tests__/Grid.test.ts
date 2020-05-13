import {Population} from '@Conway/Population';
import {Grid} from '@Conway/Frontend/Grid';
import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';
import {Position} from '@Conway/Geometry/Position';
import {CellMatrix} from '@Conway/Geometry/CellMatrix';

describe('Grid', () => {

    let population: Population;

    beforeAll(() => {

        const cellMatrix = new CellMatrix();

        population = new Population(
            cellMatrix,
            1000
        );

    });

    test('can be created', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 5),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(grid).toBeInstanceOf(Grid);

    });

    test('throw execption for offset.x below -1 or higher then 1', () => {

        expect(() => {

            new Grid(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(-1.1, 0)
            );

        }).toThrowErrorMatchingSnapshot();

        expect(() => {

            new Grid(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(1.1, 0)
            );

        }).toThrowErrorMatchingSnapshot();

    });

    test('throw execption for offset.y below -1 or higher then 1', () => {

        expect(() => {

            new Grid(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(0, -1.1)
            );

        }).toThrowErrorMatchingSnapshot();

        expect(() => {

            new Grid(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(0, 1.1)
            );

        }).toThrowErrorMatchingSnapshot();

    });


    test('get rows/cols odd number of rows/cols', () => {

        const grid = new Grid(
                population,
                new GridDimension(3, 5),
                new Position(0, 0),
                new Position(0, 0)
            );

        expect(grid.getRows()).toBe(3);
        expect(grid.getCols()).toBe(5);

        expect(grid.getSourcePosition()).toStrictEqual(
            new Position(0, 0)
        );

        expect(grid.getOffset()).toStrictEqual(
            new Position(0, 0)
        );

        expect(grid.getCells().length).toBe(3 * 5);

    });

    test('get rows/cols odd number of rows/cols with integer offset', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 5),
            new Position(-1, -2),
            new Position(0, 0)
        );

        expect(grid.getRows()).toBe(3);
        expect(grid.getCols()).toBe(5);

        expect(grid.getSourcePosition()).toStrictEqual(
            new Position(-1, -2)
        );

        expect(grid.getOffset()).toStrictEqual(
            new Position(0, 0)
        );

    });

    test('get rows/cols odd number of rows/cols with decimal offset', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 5),
            new Position(-1, -2),
            new Position(-0.5, -0.5)
        );

        expect(grid.getRows()).toBe(3);
        expect(grid.getCols()).toBe(5);

        expect(grid.getSourcePosition()).toStrictEqual(
            new Position(-1, -2)
        );

        expect(grid.getOffset()).toStrictEqual(
            new Position(-0.5, -0.5)
        );

    });

    test('get relative and absolute positions', () => {

        const grid = new Grid(
            population,
            new GridDimension(1, 1),
            new Position(-1, -2),
            new Position(0, 0)
        );


        const cells = grid.getCells();

        expect(cells.length).toBe(1);

        const cell = cells[0];

        expect(cell.relativePosition).toStrictEqual(
            new Position(0, 0)
        );

        expect(cell.absolutePosition).toStrictEqual(
            new Position(-1, -2)
        );

    });

    test('get cell with offset', () => {

        const grid = new Grid(
            population,
            new GridDimension(1, 1),
            new Position(0, 0),
            new Position(-0.5, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(1);

        const cellOne = cells[0];

        expect(cellOne.relativePosition).toStrictEqual(
            new Position(0, 0)
        );

        expect(cellOne.x).toBe(-0.5);

        expect(cellOne.absolutePosition).toStrictEqual(
            new Position(0, 0)
        );

    });

    test('get cells positions without offset', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(9);

        const relativePositions: Position[] = [];
        const absolutePositions: Position[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).toStrictEqual([
            new Position(-1, -1),
            new Position(0, -1),
            new Position(1, -1),
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

        // no offset, so relative and absolute positions should be the same
        expect(relativePositions).toStrictEqual(absolutePositions);

    });

    test('get cells positions with offset', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(-0.5, -0.5)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(9);

        const relativePositions: Position[] = [];
        const absolutePositions: Position[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).toStrictEqual([
            new Position(-1, -1),
            new Position(0, -1),
            new Position(1, -1),
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

        // no offset, so relative and absolute positions should be the same
        expect(relativePositions).toStrictEqual(absolutePositions);

    });

    test('get cells positions without offset 0/1', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(0, 1),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(9);

        const relativePositions: Position[] = [];
        const absolutePositions: Position[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).toStrictEqual([
            new Position(-1, -1),
            new Position(0, -1),
            new Position(1, -1),
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

        expect(absolutePositions).toStrictEqual([
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1),
            new Position(-1, 2),
            new Position(0, 2),
            new Position(1, 2)
        ]);

    });

    test('get cells positions without offset 1/0', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(1, 0),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(9);

        const relativePositions: Position[] = [];
        const absolutePositions: Position[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).toStrictEqual([
            new Position(-1, -1),
            new Position(0, -1),
            new Position(1, -1),
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

        expect(absolutePositions).toStrictEqual([
            new Position(-1 + 1, -1),
            new Position(0 + 1, -1),
            new Position(1 + 1, -1),
            new Position(-1 + 1, 0),
            new Position(0 + 1, 0),
            new Position(1 + 1, 0),
            new Position(-1 + 1, 1),
            new Position(0 + 1, 1),
            new Position(1 + 1, 1)
        ]);

    });

    test('get cells coordinates without offset', () => {

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(0, 0)
        );

        const coordinates: Position[] = [];

        for (const cell of grid.getCells()) {
            coordinates.push(
                new Position(cell.x, cell.y)
            );
        }

        expect(coordinates).toStrictEqual([
            new Position(-1, -1),
            new Position(0, -1),
            new Position(1, -1),
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0),
            new Position(-1, 1),
            new Position(0, 1),
            new Position(1, 1)
        ]);

    });

    test('get cells coordinates without offset -0.5/0', () => {

        const xOffset = -0.5;

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(xOffset, 0)
        );

        const coordinates: Position[] = [];

        for (const cell of grid.getCells()) {
            coordinates.push(
                new Position(cell.x, cell.y)
            );
        }

        expect(coordinates).toStrictEqual([
            new Position(-1 + xOffset, -1),
            new Position(0 + xOffset, -1),
            new Position(1 + xOffset, -1),
            new Position(-1 + xOffset, 0),
            new Position(0 + xOffset, 0),
            new Position(1 + xOffset, 0),
            new Position(-1 + xOffset, 1),
            new Position(0 + xOffset, 1),
            new Position(1 + xOffset, 1)
        ]);

    });

    test('get cells coordinates without offset 0/-0.5', () => {

        const yOffset = -0.5;

        const grid = new Grid(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(0, yOffset)
        );

        const coordinates: Position[] = [];

        for (const cell of grid.getCells()) {
            coordinates.push(
                new Position(cell.x, cell.y)
            );
        }

        expect(coordinates).toStrictEqual([
            new Position(-1, -1 + yOffset),
            new Position(0, -1 + yOffset),
            new Position(1, -1 + yOffset),
            new Position(-1, 0 + yOffset),
            new Position(0, 0 + yOffset),
            new Position(1, 0 + yOffset),
            new Position(-1, 1 + yOffset),
            new Position(0, 1 + yOffset),
            new Position(1, 1 + yOffset)
        ]);

    });

    test('relative center can be retrieved', () => {

        let grid = new Grid(
            population,
            new GridDimension(1, 1),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new Position(0, 0)
        );

        grid = new Grid(
            population,
            new GridDimension(3, 1),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new Position(1, 0)
        );

        grid = new Grid(
            population,
            new GridDimension(1, 3),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new Position(0, 1)
        );


        grid = new Grid(
            population,
            new GridDimension(2, 2),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new Position(1, 1)
        );

        grid = new Grid(
            population,
            new GridDimension(4, 4),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new Position(2, 2)
        );

    });



});
