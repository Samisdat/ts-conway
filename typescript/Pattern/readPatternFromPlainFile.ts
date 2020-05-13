import {Position} from '@Conway/Geometry/Position';
import {Pattern} from '@Conway/Pattern/Pattern';
import {Matrix} from '@Conway/Geometry/Matrix';

export const readPatternFromPlainFile = (patternPlainText: string): Pattern => {

    let name: string | undefined = undefined;
    const matrix = new Matrix();

    const patternPows: string[] = patternPlainText.split('\n').reverse();

    const isComment = new RegExp('^!(.*?)');
    const isMeta = new RegExp('^!(.*?)\:(.*?)$');

    let y = 0;
    let x = 0;

    for (let patternPow of patternPows) {

        patternPow = patternPow.trim();

        if (true === isComment.test(patternPow)) {

            if (true === isMeta.test(patternPow)) {

                const meta = isMeta.exec(patternPow) as RegExpMatchArray;

                if ('Name' === meta[1]) {
                    name = meta[2].trim();
                }

            }
            continue;
        }

        const cols: string[] = patternPow.trim().split('');

        x = 0;

        for (const col of cols) {

            if ('O' === col) {

                matrix.add(new Position(x, y));

            }

            x += 1;
        }

        y += 1;

    }

    if (undefined === name) {
        name = 'unnamed';
    }

    const pattern = new Pattern(name, matrix);

    return pattern;

};

