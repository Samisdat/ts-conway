import {Position} from '../Conway/Position';

export interface ControlInterface {
    getZoom(): number;

    getPan(): Position;

    update(): void;
}
