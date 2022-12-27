import {Position} from '@Conway/Geometry/Position';
import {Pattern} from '@Conway/Pattern/Pattern';
import {Matrix} from '@Conway/Geometry/Matrix';

interface ExtractedPattern {
    name: string;
    pattern: string[];
}

const extractePattern = (patternPlainText: string): ExtractedPattern => {

    const extractedPattern: ExtractedPattern = {
        name: 'unnamed',
        pattern: []
    };

    const rows: string[] = patternPlainText.split('\n').reverse();

    const isComment = new RegExp('^!(.*?)');
    const isMeta = new RegExp('^!(.*?)\:(.*?)$');

    for (const row of rows) {

        if (true === isComment.test(row)) {

            if (true === isMeta.test(row)) {

                const meta = isMeta.exec(row) as RegExpMatchArray;

                if ('Name' === meta[1]) {
                    extractedPattern.name = meta[2].trim();
                }

            }

        } else {

            extractedPattern.pattern.push(row);

        }

    }

    return extractedPattern;

};

export const readPatternFromPlainFile = (patternPlainText: string): Pattern => {

    const extractedPattern = extractePattern(patternPlainText);

    const matrix = new Matrix();

    let y = 0;
    let x = 0;

    for (const row of extractedPattern.pattern) {

        const cols: string[] = row.trim().split('');

        x = 0;

        for (const col of cols) {

            if ('O' === col) {

                matrix.add(new Position(x, y));

            }

            x += 1;
        }

        y += 1;

    }

    const pattern = new Pattern(extractedPattern.name, matrix);

    return pattern;

};

