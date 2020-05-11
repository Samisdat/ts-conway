import serializer from '../../../../jest-serialize-conway';

import {readPatternFromPlainFile} from '@Conway/Conway/Pattern/readPatternFromPlainFile';
import {Pattern} from '@Conway/Conway/Pattern';
import {glider} from '@Conway/Patterns/glider.cells';



describe('PatternFromPlainText', () => {

    beforeAll(() => {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created with a complete *.cell file', () => {

        const pattern = readPatternFromPlainFile(glider);

        expect(pattern).toBeInstanceOf(Pattern);

        expect(pattern.getMatrix()).toMatchSnapshot();

    });

    test('can be created with a .cell without meta ', () => {

        const patternStr = 'O..\n' +
            'OOO';

        const scholar = readPatternFromPlainFile(patternStr);

        expect(scholar).toBeInstanceOf(Pattern);

        expect(scholar.getMatrix()).toMatchSnapshot();

    });

});
