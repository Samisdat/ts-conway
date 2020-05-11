import {MainControlInterface} from '@Conway/Control/MainControlInterface';
import {Position} from '@Conway/Conway/Position';

export class NoControl implements MainControlInterface {

    getZoom(): number {
        return 1;
    }

    getPan(): Position {
        return new Position(0, 0);
    }

    update(): void {
        return;
    }

}
