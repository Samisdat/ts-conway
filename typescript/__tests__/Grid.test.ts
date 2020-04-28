import {Habitat} from '../Conway/Habitat';
import {GridDimension} from '../Grid/GridDimension';
import {IntegerPosition} from '../Conway/IntegerPosition';
import {Position} from '../Conway/Position';
import {Grid} from '../Grid';
import {CellMatrix} from '../Conway/CellMatrix';

describe('Grid', () => {

    let habitat: Habitat;

    beforeAll(() => {

        const cellMatrix = new CellMatrix();

        habitat = new Habitat(
            cellMatrix,
            1000
        );

    });

    it('can be created', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 5),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid).toBeInstanceOf(Grid);

    });

    it('throw execption for offset.x below -1 or higher then 1', () => {

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(-1.1, 0)
            );

        }).toThrowErrorMatchingSnapshot();

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(1.1, 0)
            );

        }).toThrowErrorMatchingSnapshot();

    });

    it('throw execption for offset.y below -1 or higher then 1', () => {

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new Position(0, 0),
                new Position(0, -1.1)
            );

        }).toThrowErrorMatchingSnapshot();

        expect(() => {

            new Grid(
                habitat,
                new GridDimension(2, 3),
                new IntegerPosition(0, 0),
                new Position(0, 1.1)
            );

        }).toThrowErrorMatchingSnapshot();

    });


    it('get rows/cols odd number of rows/cols', () => {

        let grid = new Grid(
                habitat,
                new GridDimension(3, 5),
                new IntegerPosition(0, 0),
                new Position(0, 0)
            );

        expect(grid.getRows()).toBe(3);
        expect(grid.getCols()).toBe(5);

        expect(grid.getSourcePosition()).toStrictEqual(
            new IntegerPosition(0, 0)
        );

        expect(grid.getOffset()).toStrictEqual(
            new Position(0, 0)
        );

        expect(grid.getCells().length).toBe(3 * 5);

    });

    it('get rows/cols odd number of rows/cols with integer offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 5),
            new IntegerPosition(-1, -2),
            new Position(0, 0)
        );

        expect(grid.getRows()).toBe(3);
        expect(grid.getCols()).toBe(5);

        expect(grid.getSourcePosition()).toStrictEqual(
            new IntegerPosition(-1, -2)
        );

        expect(grid.getOffset()).toStrictEqual(
            new Position(0, 0)
        );

    });

    it('get rows/cols odd number of rows/cols with decimal offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 5),
            new IntegerPosition(-1, -2),
            new Position(-0.5, -0.5)
        );

        expect(grid.getRows()).toBe(3);
        expect(grid.getCols()).toBe(5);

        expect(grid.getSourcePosition()).toStrictEqual(
            new IntegerPosition(-1, -2)
        );

        expect(grid.getOffset()).toStrictEqual(
            new Position(-0.5, -0.5)
        );

    });

    it('get relative and absolute positions', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(1, 1),
            new IntegerPosition(-1, -2),
            new Position(0, 0)
        );


        const cells = grid.getCells();

        expect(cells.length).toBe(1);

        const cell = cells[0];

        expect(cell.relativePosition).toStrictEqual(
            new IntegerPosition(0, 0)
        );

        expect(cell.absolutePosition).toStrictEqual(
            new IntegerPosition(-1, -2)
        );

    });

    it('get cell with offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(1, 1),
            new IntegerPosition(0, 0),
            new Position(-0.5, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(1);

        const cellOne = cells[0];

        expect(cellOne.relativePosition).toStrictEqual(
            new IntegerPosition(0, 0)
        );

        expect(cellOne.x).toBe(-0.5);

        expect(cellOne.absolutePosition).toStrictEqual(
            new IntegerPosition(0, 0)
        );

    });

    it('get cells positions without offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
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
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        // no offset, so relative and absolute positions should be the same
        expect(relativePositions).toStrictEqual(absolutePositions);

    });

    it('get cells positions with offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
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
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        // no offset, so relative and absolute positions should be the same
        expect(relativePositions).toStrictEqual(absolutePositions);

    });

    it('get cells positions without offset 0/1', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 1),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(9);

        const relativePositions: IntegerPosition[] = [];
        const absolutePositions: IntegerPosition[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).toStrictEqual([
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        expect(absolutePositions).toStrictEqual([
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1),
            new IntegerPosition(-1, 2),
            new IntegerPosition(0, 2),
            new IntegerPosition(1, 2)
        ]);

    });

    it('get cells positions without offset 1/0', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(1, 0),
            new Position(0, 0)
        );

        const cells = grid.getCells();

        expect(cells.length).toBe(9);

        const relativePositions: IntegerPosition[] = [];
        const absolutePositions: IntegerPosition[] = [];

        for (const cell of cells) {
            relativePositions.push(cell.relativePosition);
            absolutePositions.push(cell.absolutePosition);
        }

        expect(relativePositions).toStrictEqual([
            new IntegerPosition(-1, -1),
            new IntegerPosition(0, -1),
            new IntegerPosition(1, -1),
            new IntegerPosition(-1, 0),
            new IntegerPosition(0, 0),
            new IntegerPosition(1, 0),
            new IntegerPosition(-1, 1),
            new IntegerPosition(0, 1),
            new IntegerPosition(1, 1)
        ]);

        expect(absolutePositions).toStrictEqual([
            new IntegerPosition(-1 + 1, -1),
            new IntegerPosition(0 + 1, -1),
            new IntegerPosition(1 + 1, -1),
            new IntegerPosition(-1 + 1, 0),
            new IntegerPosition(0 + 1, 0),
            new IntegerPosition(1 + 1, 0),
            new IntegerPosition(-1 + 1, 1),
            new IntegerPosition(0 + 1, 1),
            new IntegerPosition(1 + 1, 1)
        ]);

    });

    it('get cells coordinates without offset', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
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

    it('get cells coordinates without offset -0.5/0', () => {

        const xOffset = -0.5;

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
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

    it('get cells coordinates without offset 0/-0.5', () => {

        const yOffset = -0.5;

        let grid = new Grid(
            habitat,
            new GridDimension(3, 3),
            new IntegerPosition(0, 0),
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

    it('relative center can be retrieved', () => {

        let grid = new Grid(
            habitat,
            new GridDimension(1, 1),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new IntegerPosition(0, 0)
        );

        grid = new Grid(
            habitat,
            new GridDimension(3, 1),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new IntegerPosition(1, 0)
        );

        grid = new Grid(
            habitat,
            new GridDimension(1, 3),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new IntegerPosition(0, 1)
        );


        grid = new Grid(
            habitat,
            new GridDimension(2, 2),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new IntegerPosition(1, 1)
        );

        grid = new Grid(
            habitat,
            new GridDimension(4, 4),
            new IntegerPosition(0, 0),
            new Position(0, 0)
        );

        expect(grid.center).toStrictEqual(
            new IntegerPosition(2, 2)
        );

    });



});
