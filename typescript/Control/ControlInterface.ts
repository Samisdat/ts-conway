import {Position} from '../Conway/position';

export interface ControlInterface {
    getZoom(): number;

    getPan(): Position;

    update(): void;
}
