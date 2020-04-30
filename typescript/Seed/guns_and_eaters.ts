import {GridCreator} from '../Grid/GridCreator';
import {CellMatrix} from '../Conway/CellMatrix';
import {Patterns} from '../Conway/Patterns';
import {Position} from '../Conway/Position';
import {SeedFunction} from '../Frontend/Web';

export const guns_and_eaters: SeedFunction = (gridCreator: GridCreator, matrix: CellMatrix) => {

    const patterns = new Patterns();
    const gunsAndEaters = patterns.get('guns_and_eaters');

    const patternGutter = 2;

    let repeat = Math.floor(gridCreator.getRows() / (gunsAndEaters.getWidth() + patternGutter ));

    if (0 === repeat % 2) {
        repeat += 1;
    }

    let patternsPerSide = Math.floor(repeat / 2);

    matrix.seedPattern(
        patterns.get('guns_and_eaters'),
        new Position(0, -1)
    );


    let move = new Position(0, -1);

    if (0 === repeat % 2) {
        move = move.move(
            new Position(-1 * Math.floor((gunsAndEaters.getWidth() + patternGutter )  / 2 ), 0)
        );
    }

    for (let i = 0; i < patternsPerSide; i += 1) {

        move = move.move(
            new Position(
                -1 * (gunsAndEaters.getWidth() + patternGutter), 0
            )
        );

        matrix.seedPattern(
            patterns.get('guns_and_eaters'),
            move
        );

    }

    move = new Position(0, -1);

    if (0 === repeat % 2) {
        move = move.move(
            new Position(-1 * Math.floor((gunsAndEaters.getWidth() + patternGutter )  / 2 ), 0)
        );
    }

    for (let i = 0; i < patternsPerSide; i += 1) {

        move = move.move(
            new Position(
                gunsAndEaters.getWidth() + patternGutter, 0
            )
        );

        matrix.seedPattern(
            patterns.get('guns_and_eaters'),
            move
        );

    }

};
