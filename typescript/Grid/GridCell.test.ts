import {Position} from '../Conway/position';
import {GridCell} from './GridCell';
import {Config} from '../Config';
import {CellTypesFactory} from '../CellType/CellTypesFactory';

describe('GridCell', () => {

    it('can be created', () => {

        let gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(gridCell).toBeInstanceOf(GridCell);

    });

    it('getter x, y, width and height for positive position ', () => {

        let gridCell = new GridCell(
            new Position(10, 10),
            new Position(0, 0),
            new Position(0, 0)
        );

        expect(gridCell.x).toBe(10);
        expect(gridCell.y).toBe(10);

    });

    it('get checkerboard color', () => {

        let gridCell: GridCell;

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(-1, -1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardLight);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, -1),
            new Position(0, 0)
        );

        expect(gridCell.getColor()).toBe(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(1, -1),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardLight);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(-1, 0),
            new Position(0, 0)
        );
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, 0),
            new Position(0, 0)
        );
        expect(gridCell.getType()).toBe(CellTypesFactory.get().center());
        expect(gridCell.getColor()).toBe(Config.colorCenter);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(1, 0),
            new Position(0, 0)
        );
        expect(gridCell.getType()).toBe(CellTypesFactory.get().checkerboardDark());
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(-1, 1),
            new Position(0, 0)
        );
        expect(gridCell.getType()).toBe(CellTypesFactory.get().checkerboardLight());
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardLight);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 0)
        );
        expect(gridCell.getType()).toBe(CellTypesFactory.get().checkerboardDark());
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardDark);

        gridCell = new GridCell(
            new Position(0, 0),
            new Position(1, 1),
            new Position(0, 0)
        );
        expect(gridCell.getType()).toBe(CellTypesFactory.get().checkerboardLight());
        expect(gridCell.getColor()).toBe(Config.colorCheckerboardLight);

    });

    it('get relative and absolute position', () => {

        let gridCell: GridCell;

        gridCell = new GridCell(new Position(0, 0), new Position(0, 0), new Position(0, 0));

        expect(gridCell.relativePosition).toStrictEqual(new Position(0, 0));
        expect(gridCell.absolutePosition).toStrictEqual(new Position(0, 0));

        gridCell = new GridCell(new Position(0, 0), new Position(2, 3), new Position(0, 0));

        expect(gridCell.relativePosition).toStrictEqual(new Position(0, 0));
        expect(gridCell.absolutePosition).toStrictEqual(new Position(2, 3));

        gridCell = new GridCell(new Position(0, 0), new Position(-2, -3), new Position(0, 0));

        expect(gridCell.relativePosition).toStrictEqual(new Position(0, 0));
        expect(gridCell.absolutePosition).toStrictEqual(new Position(-2, -3));

    });

});
