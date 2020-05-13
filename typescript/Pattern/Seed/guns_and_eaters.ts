import {SeedFunction} from '@Conway/Frontend/Web';
import {Position} from '@Conway/Geometry/Position';
import {readPatternFromPlainFile} from '@Conway/Pattern/readPatternFromPlainFile';
import {gunsAndEatersPattern} from '@Conway/Pattern/Store/gunsAndEaters.cells';
import {GridCreator} from '@Conway/Frontend/Grid/GridCreator';
import {seedPattern} from '@Conway/Pattern/seedPattern';
import {Matrix} from '@Conway/Geometry/Matrix';
import {matrixToString} from '@Conway/Geometry/matrixToString';


export const gunsAndEaters: SeedFunction = (gridCreator: GridCreator, matrix: Matrix) => {

    const gunsAndEaters = readPatternFromPlainFile(gunsAndEatersPattern);

    const patternGutter = 2;

    let repeat = Math.floor(gridCreator.getRows() / (gunsAndEaters.getWidth() + patternGutter ));

    if (0 === repeat % 2) {
        repeat += 1;
    }

    const patternsPerSide = Math.floor(repeat / 2);

    seedPattern(matrix,
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

        seedPattern(matrix,
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

        seedPattern(matrix,
            gunsAndEaters,
            move
        );

    }
    console.log(matrixToString(matrix))

};
