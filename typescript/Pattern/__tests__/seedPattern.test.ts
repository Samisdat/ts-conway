import serializer from '../../../jest-serialize-conway';
import {CellMatrix} from '@Conway/Geometry/CellMatrix';
import {Position} from '@Conway/Geometry/Position';
import {Pattern} from '@Conway/Pattern/Pattern';
import {glider} from '@Conway/Pattern/Store/glider.cells';
import {scholar} from '@Conway/Pattern/Store/scholar.cells';
import {blinker} from '@Conway/Pattern/Store/blinker.cells';
import {seedPattern} from '@Conway/Pattern/seedPattern';

describe('seedPattern', () => {

    beforeEach(function () {
        expect.addSnapshotSerializer(serializer);
    });

    test('seed a pattern', () => {

        const patternString = blinker

        const pattern = Pattern.fromString(blinker);

        const matrix = new CellMatrix();

        seedPattern(matrix, pattern);

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('seed a pattern with offset', () => {

        const patternString = blinker

        const pattern = Pattern.fromString(blinker);

        const matrix = new CellMatrix();

        seedPattern(matrix, pattern, new Position(1,1));

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

});
