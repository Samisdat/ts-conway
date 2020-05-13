import {CellMatrix} from '@Conway/Geometry/CellMatrix';
import {Pattern} from '@Conway/Pattern/Pattern';
import {Position} from '@Conway/Geometry/Position';

export const seedPattern = (matrix: CellMatrix, pattern: Pattern, moveBy = new Position(0, 0)): void => {

    const positions = pattern.getMatrix().all();

    const offSet = new Position(
        -1 * Math.floor(pattern.getMatrix().width() / 2),
        -1 * Math.floor(pattern.getMatrix().height() / 2)
    ).move(moveBy);

    for (const position of positions) {

        matrix.add(position.move(moveBy));

    }

}
