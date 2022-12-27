import serializer from '../../../jest-serialize-conway';
import {Position} from '@Conway/Geometry/Position';
import {Pattern} from '@Conway/Pattern/Pattern';
import {blinker} from '@Conway/Pattern/Store/blinker.cells';
import {seedPattern} from '@Conway/Pattern/seedPattern';
import {Matrix} from '@Conway/Geometry/Matrix';

describe('seedPattern', () => {

    beforeEach(function () {
        expect.addSnapshotSerializer(serializer);
    });

    test('seed a pattern', () => {

        const patternString = blinker

        const pattern = Pattern.fromString(blinker);

        const matrix = new Matrix();

        seedPattern(matrix, pattern);

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('seed a pattern with offset', () => {

        const patternString = blinker

        const pattern = Pattern.fromString(blinker);

        const matrix = new Matrix();

        seedPattern(matrix, pattern, new Position(1,1));

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

});
