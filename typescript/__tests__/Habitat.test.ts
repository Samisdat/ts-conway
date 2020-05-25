import {Population} from '@Conway/Population';
import {GridDimension} from '@Conway/Frontend/Grid/GridDimension';
import {Position} from '@Conway/Geometry/Position';
import {Matrix} from '@Conway/Geometry/Matrix';
import {Habitat} from '@Conway/Habitat';

describe('Habitat', () => {

    let population: Population;

    beforeAll(() => {

        const matrix = new Matrix();

        population = new Population(
            matrix,
            1000
        );

    });

    test('can be created', () => {

        const habitat = new Habitat(
            population,
            new GridDimension(3, 5),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(habitat).toBeInstanceOf(Habitat);

    });

    test('throw execption for offset.x below -1 or higher then 1', () => {

        expect(() => {

            new Habitat(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(-1.1, 0)
            );

        }).toThrowErrorMatchingSnapshot();

        expect(() => {

            new Habitat(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(1.1, 0)
            );

        }).toThrowErrorMatchingSnapshot();

    });

    test('throw execption for offset.y below -1 or higher then 1', () => {

        expect(() => {

            new Habitat(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(0, -1.1)
            );

        }).toThrowErrorMatchingSnapshot();

        expect(() => {

            new Habitat(
                population,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(0, 1.1)
            );

        }).toThrowErrorMatchingSnapshot();

    });


    test('get rows/cols odd number of rows/cols', () => {

        const habitat = new Habitat(
                population,
                new GridDimension(3, 5),
                new Position(0, 0),
                new Position(0, 0)
            );

        expect(habitat.getRows()).toBe(3);
        expect(habitat.getCols()).toBe(5);

        expect(habitat.getSourcePosition()).toStrictEqual(
            new Position(0, 0)
        );

        expect(habitat.getOffset()).toStrictEqual(
            new Position(0, 0)
        );

        expect(habitat.getCells().length).toBe(3 * 5);

    });

    test('get rows/cols odd number of rows/cols with integer offset', () => {

        const habitat = new Habitat(
            population,
            new GridDimension(3, 5),
            new Position(-1, -2),
            new Position(0, 0)
        );

        expect(habitat.getRows()).toBe(3);
        expect(habitat.getCols()).toBe(5);

        expect(habitat.getSourcePosition()).toStrictEqual(
            new Position(-1, -2)
        );

        expect(habitat.getOffset()).toStrictEqual(
            new Position(0, 0)
        );

    });

    test('get rows/cols odd number of rows/cols with decimal offset', () => {

        const habitat = new Habitat(
            population,
            new GridDimension(3, 5),
            new Position(-1, -2),
            new Position(-0.5, -0.5)
        );

        expect(habitat.getRows()).toBe(3);
        expect(habitat.getCols()).toBe(5);

        expect(habitat.getSourcePosition()).toStrictEqual(
            new Position(-1, -2)
        );

        expect(habitat.getOffset()).toStrictEqual(
            new Position(-0.5, -0.5)
        );

    });

    test('get relative and absolute positions', () => {

        const habitat = new Habitat(
            population,
            new GridDimension(1, 1),
            new Position(-1, -2),
            new Position(0, 0)
        );


        const cells = habitat.getCells();

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

        const habitat = new Habitat(
            population,
            new GridDimension(1, 1),
            new Position(0, 0),
            new Position(-0.5, 0)
        );

        const cells = habitat.getCells();

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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(0, 0)
        );

        const cells = habitat.getCells();

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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(-0.5, -0.5)
        );

        const cells = habitat.getCells();

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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(0, 1),
            new Position(0, 0)
        );

        const cells = habitat.getCells();

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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(1, 0),
            new Position(0, 0)
        );

        const cells = habitat.getCells();

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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(0, 0)
        );

        const coordinates: Position[] = [];

        for (const cell of habitat.getCells()) {
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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(xOffset, 0)
        );

        const coordinates: Position[] = [];

        for (const cell of habitat.getCells()) {
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

        const habitat = new Habitat(
            population,
            new GridDimension(3, 3),
            new Position(0, 0),
            new Position(0, yOffset)
        );

        const coordinates: Position[] = [];

        for (const cell of habitat.getCells()) {
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

        let habitat = new Habitat(
            population,
            new GridDimension(1, 1),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(habitat.center).toStrictEqual(
            new Position(0, 0)
        );

        habitat = new Habitat(
            population,
            new GridDimension(3, 1),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(habitat.center).toStrictEqual(
            new Position(1, 0)
        );

        habitat = new Habitat(
            population,
            new GridDimension(1, 3),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(habitat.center).toStrictEqual(
            new Position(0, 1)
        );


        habitat = new Habitat(
            population,
            new GridDimension(2, 2),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(habitat.center).toStrictEqual(
            new Position(1, 1)
        );

        habitat = new Habitat(
            population,
            new GridDimension(4, 4),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(habitat.center).toStrictEqual(
            new Position(2, 2)
        );

    });

});
