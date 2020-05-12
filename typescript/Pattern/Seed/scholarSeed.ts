import {SeedFunction} from '@Conway/Frontend/Web';
import {GridCreator} from '@Conway/Grid/GridCreator';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Position} from '@Conway/Conway/Position';
import {readPatternFromPlainFile} from '@Conway/Pattern/readPatternFromPlainFile';
import {scholar} from '@Conway/Pattern/scholar.cells';

export const scholarSeed: SeedFunction = (gridCreator: GridCreator, matrix: CellMatrix) => {

    const pattern = readPatternFromPlainFile(scholar);

    pattern.rotate();

    matrix.seedPattern(
        pattern,
        new Position(-75, 0)
    );

    matrix.seedPattern(
        pattern,
        new Position(75, 0)
    );

};

