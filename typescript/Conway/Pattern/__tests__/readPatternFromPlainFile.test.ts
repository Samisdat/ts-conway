import {readFileSync} from 'fs';
import serializer from '../../../../jest-serialize-conway';

import {readPatternFromPlainFile} from '@Conway/Conway/Pattern/readPatternFromPlainFile';
import {Pattern} from '@Conway/Conway/Pattern';

describe('PatternFromPlainText', () => {

    beforeAll(() => {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created with a complete *.cell file', () => {

        const gliderFile = readFileSync(__dirname + '/glider.cells', {encoding: 'utf8'});

        const gilder = readPatternFromPlainFile(gliderFile);

        expect(gilder).toBeInstanceOf(Pattern);

        expect(gilder.getMatrix()).toMatchSnapshot();

    });

    test('can be created with a .cell without meta ', () => {

        const patternStr = 'O..\n' +
            'OOO';

        const scholar = readPatternFromPlainFile(patternStr);

        expect(scholar).toBeInstanceOf(Pattern);

        expect(scholar.getMatrix()).toMatchSnapshot();

    });

});
