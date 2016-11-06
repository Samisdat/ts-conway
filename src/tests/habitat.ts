import { expect } from 'chai';

import Position from '../ts/position';
import Cell from '../ts/cell';

import Habitat from '../ts/habitat';

describe('Habitat', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let habitat =  new Habitat();

        expect(habitat).to.be.instanceof(Habitat);        

    });

    it('seed a cell', () => {

        var habitat = new Habitat();
        expect(habitat.getAllCells()).to.be.deep.equal([]);

        habitat.seed(
            new Position(0, 1)
        );

        var cells = habitat.getAllCells();
        expect(cells.length).to.be.equal(1);
        expect(cells[0].x).to.be.equal(0);
        expect(cells[0].y).to.be.equal(1);

    });

    it('elapse with one cell', () => {

        var habitat = new Habitat();
        expect(habitat.getAllCells()).to.be.deep.equal([]);

        habitat.seed(
            new Position(0, 1)
        );

        expect(habitat.get()).to.be.deep.equal([new Position(0, 1)]);

    });    
    
    it('elapse with a blinker', () => {

        var habitat = new Habitat();
        expect(habitat.get()).to.be.deep.equal([]);
        expect(habitat.getAllCells()).to.be.deep.equal([]);
        
        habitat.seed(
            new Position(0, 0)
        );
        habitat.seed(
            new Position(0, 1)
        );
        habitat.seed(
            new Position(0, 2)
        );

        expect(habitat.get()).to.be.deep.equal([
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 2)
        ]);

        habitat.elapse();

        expect(habitat.get()).to.be.deep.equal([
            new Position(0, 1),
            new Position(-1, 1),
            new Position(1, 1)
        ]);

        // check garbage collection
        expect(habitat.getAllCells().length).to.be.equal(3);
        
        
        habitat.elapse();

        expect(habitat.get()).to.be.deep.equal([
            new Position(0, 1),
            new Position(0, 0),
            new Position(0, 2)
        ]);

        expect(habitat.getAllCells().length).to.be.equal(3);

    });

});
