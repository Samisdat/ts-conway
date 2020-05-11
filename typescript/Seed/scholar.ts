import {SeedFunction} from '@Conway/Frontend/Web';
import {GridCreator} from '@Conway/Grid/GridCreator';
import {CellMatrix} from '@Conway/Conway/CellMatrix';
import {Patterns} from '@Conway/Conway/Patterns';
import {Position} from '@Conway/Conway/Position';

export const scholar: SeedFunction = (gridCreator: GridCreator, matrix: CellMatrix) => {

    const patterns = new Patterns();
    const pattern = patterns.get('scholar');

    matrix.seedPattern(
        pattern,
        new Position(-75, 0)
    );

    matrix.seedPattern(
        pattern,
        new Position(75, 0)
    );

};

