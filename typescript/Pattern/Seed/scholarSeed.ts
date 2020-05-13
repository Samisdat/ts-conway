import {SeedFunction} from '@Conway/Frontend/Web';
import {Position} from '@Conway/Geometry/Position';
import {readPatternFromPlainFile} from '@Conway/Pattern/readPatternFromPlainFile';
import {scholar} from '@Conway/Pattern/Store/scholar.cells';
import {GridCreator} from '@Conway/Frontend/Grid/GridCreator';
import {Matrix} from '@Conway/Geometry/Matrix';
import {seedPattern} from '@Conway/Pattern/seedPattern';

export const scholarSeed: SeedFunction = (gridCreator: GridCreator, matrix: Matrix) => {

    const pattern = readPatternFromPlainFile(scholar);

    pattern.rotate();

    seedPattern(
        matrix,
        pattern,
        new Position(-75, 0)
    );

    seedPattern(
        matrix,
        pattern,
        new Position(75, 0)
    );

};

