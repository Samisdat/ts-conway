
import {Pattern} from '@Conway/Pattern/Pattern';
import {Position} from '@Conway/Geometry/Position';
import {Matrix} from '@Conway/Geometry/Matrix';

export const seedPattern = (matrix: Matrix, pattern: Pattern, moveBy = new Position(0, 0)): void => {

    const positions = pattern.getMatrix().getAll();

    const offSet = new Position(
        -1 * Math.floor(pattern.getMatrix().getWidth() / 2),
        -1 * Math.floor(pattern.getMatrix().getHeight() / 2)
    ).move(moveBy);

    for (const position of positions) {

        matrix.add(position.move(moveBy));

    }

}
