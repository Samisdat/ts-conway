import serializer from '../../../../jest-serialize-conway';
import {Position} from '@Conway/Geometry/Position';
import {gunsAndEaters} from '@Conway/Pattern/Seed/guns_and_eaters';
import {Creator} from '@Conway/Habitat/Creator.ts';
import {Matrix} from '@Conway/Geometry/Matrix';

describe('guns_and_eaters', () => {

    beforeAll(() => {

        expect.addSnapshotSerializer(serializer);

    });

    test('seed with even grid', () => {

        const gridCreator = new Creator(
            200,
            100,
            1,
            new Position(0, 0),
            1
        );

        const matrix = new Matrix();

        gunsAndEaters(gridCreator, matrix);

        expect(matrix).toMatchSnapshot();

    });

    test('seed with odd grid', () => {

        const gridCreator = new Creator(
            50,
            100,
            1,
            new Position(0, 0),
            1
        );

        const matrix = new Matrix();

        gunsAndEaters(gridCreator, matrix);

        expect(matrix).toMatchSnapshot();

    });

});
