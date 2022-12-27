import {Cell} from '@Conway/Habitat/Cell';
import {Position} from '@Conway/Geometry/Position';
import {COLOR_CENTER, COLOR_CHECKERBOARD_DARK, COLOR_CHECKERBOARD_LIGHT} from '@Conway/Constants';
import {CellTypesFactory} from '@Conway/Frontend/CellType/CellTypesFactory';

describe('cell', () => {

    test('can be created', () => {

        const cell = new Cell(
            new Position(0, 0),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(cell).toBeInstanceOf(Cell);

    });

    test('getter x, y, width and height for positive position ', () => {

        const cell = new Cell(
            new Position(10, 10),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(cell.x).toBe(10);
        expect(cell.y).toBe(10);

    });

    test('get checkerboard color', () => {

        let cell: Cell;

        cell = new Cell(
            new Position(0, 0),
            new Position(-1, -1),
            new Position(0, 0)
        );
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_LIGHT);

        cell = new Cell(
            new Position(0, 0),
            new Position(0, -1),
            new Position(0, 0)
        );

        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_DARK);

        cell = new Cell(
            new Position(0, 0),
            new Position(1, -1),
            new Position(0, 0)
        );
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_LIGHT);

        cell = new Cell(
            new Position(0, 0),
            new Position(-1, 0),
            new Position(0, 0)
        );
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_DARK);

        cell = new Cell(
            new Position(0, 0),
            new Position(0, 0),
            new Position(0, 0)
        );
        expect(cell.getType()).toBe(CellTypesFactory.get().center());
        expect(cell.getColor()).toBe(COLOR_CENTER);

        cell = new Cell(
            new Position(0, 0),
            new Position(1, 0),
            new Position(0, 0)
        );
        expect(cell.getType()).toBe(CellTypesFactory.get().checkerboardDark());
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_DARK);

        cell = new Cell(
            new Position(0, 0),
            new Position(-1, 1),
            new Position(0, 0)
        );
        expect(cell.getType()).toBe(CellTypesFactory.get().checkerboardLight());
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_LIGHT);

        cell = new Cell(
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 0)
        );
        expect(cell.getType()).toBe(CellTypesFactory.get().checkerboardDark());
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_DARK);

        cell = new Cell(
            new Position(0, 0),
            new Position(1, 1),
            new Position(0, 0)
        );
        expect(cell.getType()).toBe(CellTypesFactory.get().checkerboardLight());
        expect(cell.getColor()).toBe(COLOR_CHECKERBOARD_LIGHT);

    });

    test('get relative and absolute position', () => {

        let cell: Cell;

        cell = new Cell(new Position(0, 0), new Position(0, 0), new Position(0, 0));

        expect(cell.relativePosition).toStrictEqual(new Position(0, 0));
        expect(cell.absolutePosition).toStrictEqual(new Position(0, 0));

        cell = new Cell(new Position(0, 0), new Position(2, 3), new Position(0, 0));

        expect(cell.relativePosition).toStrictEqual(new Position(0, 0));
        expect(cell.absolutePosition).toStrictEqual(new Position(2, 3));

        cell = new Cell(new Position(0, 0), new Position(-2, -3), new Position(0, 0));

        expect(cell.relativePosition).toStrictEqual(new Position(0, 0));
        expect(cell.absolutePosition).toStrictEqual(new Position(-2, -3));

    });

});
