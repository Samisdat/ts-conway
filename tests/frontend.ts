/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import { expect } from 'chai';

import Position from '../lib/position';
import Frontend from '../lib/frontend';
import Habitat from '../lib/habitat';

describe('Frontend', () => {

    it('can be created', () => {

        let frontend = new Frontend(
            25, 
            10, 
            new Habitat()
        );

        expect(frontend).to.be.instanceof(Frontend);        

    });

    it('seeding top right corner', () => {

        let frontend = new Frontend(
            3, 
            3, 
            new Habitat()
        );

        expect(frontend.get()).to.be.deep.equal([]);
        
        /** 
         * seeding
         * X00
         * 000
         * 000
         */
        frontend.seed(
            new Position(0, 0)
        );

        expect(frontend.get()).to.be.deep.equal([
            new Position(0, 0),
        ]);

        expect(frontend.getHabitat().get()).to.be.deep.equal([
            new Position(-1, -1),
        ]);

    });

    it('seeding top right corner and pan one', () => {

        let frontend = new Frontend(
            3, 
            3, 
            new Habitat()
        );

        expect(frontend.get()).to.be.deep.equal([]);
        
        /** 
         * seeding
         * X00
         * 000
         * 000
         */
        frontend.seed(
            new Position(0, 0)
        );

        expect(frontend.get()).to.be.deep.equal([
            new Position(0, 0),
        ]);

        expect(frontend.getPan().x).to.be.equal(0);
        expect(frontend.getPan().y).to.be.equal(0);

        frontend.panBy(new Position(1, 1));

        expect(frontend.get()).to.be.deep.equal([
            new Position(1, 1),
        ]);
        expect(frontend.getPan().x).to.be.equal(1);
        expect(frontend.getPan().y).to.be.equal(1);

        frontend.setPan(new Position(0, 2));

        expect(frontend.get()).to.be.deep.equal([
            new Position(0, 2),
        ]);
        expect(frontend.getPan().x).to.be.equal(0);
        expect(frontend.getPan().y).to.be.equal(2);

        console.log(frontend.toString());

    });

    it('seeding all corners', () => {

        let frontend = new Frontend(
            3, 
            3, 
            new Habitat()
        );

        expect(frontend.get()).to.be.deep.equal([]);
        
        /** 
         * seeding
         * X0X
         * 000
         * X0X
         */
        frontend.seed(
            new Position(0, 0)
        );

        frontend.seed(
            new Position(2, 0)
        );

        frontend.seed(
            new Position(0, 2)
        );

        frontend.seed(
            new Position(2, 2)
        );

        expect(frontend.get()).to.be.deep.equal([
            new Position(0, 0),
            new Position(2, 0),
            new Position(0, 2),
            new Position(2, 2),
        ]);

        expect(frontend.getHabitat().get()).to.be.deep.equal([
            new Position(-1, -1),
            new Position(1, -1),
            new Position(-1, 1),
            new Position(1, 1),
        ]);

        console.log(frontend.toString());


    });

    it('elapse with a blinker', () => {

        let frontend = new Frontend(
            3, 
            3, 
            new Habitat()
        );

        expect(frontend.get()).to.be.deep.equal([]);
        
        frontend.seed(
            new Position(1, 0)
        );
        frontend.seed(
            new Position(1, 1)
        );
        frontend.seed(
            new Position(1, 2)
        );
        
        expect(frontend.get()).to.be.deep.equal([
            new Position(1, 0),
            new Position(1, 1),
            new Position(1, 2)
        ]);

        console.log(frontend.toString());
        frontend.getHabitat().elapse();

        expect(frontend.get()).to.be.deep.equal([
            new Position(1, 1),
            new Position(0, 1),
            new Position(2, 1)
        ]);        
        
        console.log(frontend.toString());
        frontend.getHabitat().elapse();

        expect(frontend.get()).to.be.deep.equal([
            new Position(1, 1),
            new Position(1, 0),
            new Position(1, 2)
        ]);

        console.log(frontend.toString()); 

    });

});
