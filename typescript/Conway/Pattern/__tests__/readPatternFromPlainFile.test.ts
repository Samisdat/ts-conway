import {readFileSync} from 'fs';
import serializer from '../../../../jest-serialize-conway';

import {readPatternFromPlainFile} from '@Conway/Conway/Pattern/readPatternFromPlainFile';
import {Pattern} from '@Conway/Conway/Pattern';

describe('PatternFromPlainText', () => {

    beforeAll(() => {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created without control', () => {

        const scholarFile = readFileSync(__dirname + '/glider.cells', {encoding: 'utf8'});

        const scholar = readPatternFromPlainFile(scholarFile);

        expect(scholar).toBeInstanceOf(Pattern);

        expect(scholar.getMatrix()).toMatchSnapshot();

    });
});
