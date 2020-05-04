import {Position} from '@Conway/Conway/Position';

export interface MainControlInterface {
    getZoom(): number;

    getPan(): Position;

    update(): void;
}
