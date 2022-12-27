import {SeedFunction} from '@Conway/Frontend/Web';
import {Position} from '@Conway/Geometry/Position';
import {readPatternFromPlainFile} from '@Conway/Pattern/readPatternFromPlainFile';
import {scholar} from '@Conway/Pattern/Store/scholar.cells';
import {Creator} from '@Conway/Habitat/Creator.ts';
import {Matrix} from '@Conway/Geometry/Matrix';
import {seedPattern} from '@Conway/Pattern/seedPattern';

export const scholarSeed: SeedFunction = (gridCreator: Creator, matrix: Matrix) => {

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

