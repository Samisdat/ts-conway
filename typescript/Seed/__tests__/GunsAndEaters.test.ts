import {guns_and_eaters} from '../guns_and_eaters';
import {Position} from '../../Conway/Position';
import {CellMatrix} from '../../Conway/CellMatrix';
import {GridCreator} from '../../Grid/GridCreator';

import serializer from '../../../jest-serialize-conway';

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
