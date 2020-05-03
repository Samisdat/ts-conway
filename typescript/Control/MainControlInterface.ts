import {Position} from '../Conway/Position';

export interface MainControlInterface {
    getZoom(): number;

    getPan(): Position;

    update(): void;
}
