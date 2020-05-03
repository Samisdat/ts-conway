import {Position} from '../Conway/Position';
import {MainControlInterface} from './MainControlInterface';

export class NoControl implements MainControlInterface {

    getZoom(): number {
        return 1;
    }

    getPan(): Position {
        return new Position(0, 0);
    }

    update(): void {

    }

}
