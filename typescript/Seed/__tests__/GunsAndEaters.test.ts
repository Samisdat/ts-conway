
import serializer from '../../../jest-serialize-conway';
import {GridCreator} from '@Conway/Grid/GridCreator';
import {Position} from '@Conway/Conway/Position';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {guns_and_eaters} from '@Conway/Seed/guns_and_eaters';

describe('guns_and_eaters', () => {

    beforeAll(() => {

        expect.addSnapshotSerializer(serializer);

    });

    test('seed with even grid', () => {

        const gridCreator = new GridCreator(
            200,
            100,
            1,
            new Position(0, 0),
            1
        );

        const matrix = new CellMatrix();

        guns_and_eaters(gridCreator, matrix);

        expect(matrix).toMatchSnapshot();

    });

    test('seed with odd grid', () => {

        const gridCreator = new GridCreator(
            50,
            100,
            1,
            new Position(0, 0),
            1
        );

        const matrix = new CellMatrix();

        guns_and_eaters(gridCreator, matrix);

        expect(matrix).toMatchSnapshot();

    });

});
