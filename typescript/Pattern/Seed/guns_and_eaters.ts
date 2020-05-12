import {SeedFunction} from '@Conway/Frontend/Web';
import {GridCreator} from '@Conway/Grid/GridCreator';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Position} from '@Conway/Conway/Position';
import {readPatternFromPlainFile} from '@Conway/Pattern/readPatternFromPlainFile';
import {gunsAndEatersPattern} from '@Conway/Pattern/Store/gunsAndEaters.cells';


export const gunsAndEaters: SeedFunction = (gridCreator: GridCreator, matrix: CellMatrix) => {

    const gunsAndEaters = readPatternFromPlainFile(gunsAndEatersPattern);

    const patternGutter = 2;

    let repeat = Math.floor(gridCreator.getRows() / (gunsAndEaters.getWidth() + patternGutter ));

    if (0 === repeat % 2) {
        repeat += 1;
    }

    const patternsPerSide = Math.floor(repeat / 2);

    matrix.seedPattern(
        gunsAndEaters,
        new Position(0, -1)
    );

    let move = new Position(0, -1);

    for (let i = 0; i < patternsPerSide; i += 1) {

        move = move.move(
            new Position(
                -1 * (gunsAndEaters.getWidth() + patternGutter), 0
            )
        );

        matrix.seedPattern(
            gunsAndEaters,
            move
        );

    }

    move = new Position(0, -1);

    for (let i = 0; i < patternsPerSide; i += 1) {

        move = move.move(
            new Position(
                gunsAndEaters.getWidth() + patternGutter, 0
            )
        );

        matrix.seedPattern(
            gunsAndEaters,
            move
        );

    }

};
