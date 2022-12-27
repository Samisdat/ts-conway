import {Pattern} from '@Conway/Pattern/Pattern';
import {matrixToString} from '@Conway/Geometry/matrixToString';

export const patternToString = (pattern: Pattern): string => {

    let patternAsString = '!Name: ' + pattern.getName() + '\n';

    patternAsString = patternAsString + matrixToString(pattern.getMatrix(), false)

    return patternAsString;

}
