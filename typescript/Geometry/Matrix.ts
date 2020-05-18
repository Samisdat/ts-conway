import {Position} from '@Conway/Geometry/Position';
import {Boundposition} from '@Conway/Geometry/Boundposition';

interface MatrixInterface {
    [index: string]: Position;
}


export class Matrix {

    private matrix: MatrixInterface = {};

    private boundposition: Boundposition;

    public has(position: Position): boolean {

        return (undefined !== this.matrix[position.toString()]);

    }

    public add(position: Position): void {

        if (true === this.has(position)) {
            return;
        }

        this.matrix[position.toString()] = position;


        if(undefined === this.boundposition){
            this.boundposition = new Boundposition(position, position);
        }
        else{
            this.boundposition.expand(position);
        }

    }

    public remove(position: Position): void {

        if (false === this.has(position)) {
            return;
        }

        delete this.matrix[position.toString()];

    }

    public all(): Position[] {

        const positions: Position[] = [];

        for (const index in this.matrix) {

            positions.push(this.matrix[index]);

        }

        return positions;

    }

    public getBound(): Boundposition {

        return this.boundposition;

    }

    public width(): number {

        return this.getBound().getWidth();

    }

    public height(): number {

        return this.getBound().getHeight();

    }

}
