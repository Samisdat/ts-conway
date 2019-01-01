/*
import { expect } from 'chai';


import { Position } from '../src/position';
import Pattern from '../src/pattern';
import Patterns from '../src/Patterns';

describe('Patterns', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let patterns = new Patterns();

        expect(patterns).to.be.instanceof(Patterns);

    });

    it('construct fails with unkown pattern', () => {

        var createPattern = () => {

            let patterns = new Patterns();
            patterns.get('foobar');
        };

        expect(createPattern).to.throw(Error, 'unkown pattern foobar');

    });

    it('can get blinker', () =>{

        let patterns = new Patterns();

        let blinker = patterns.get('blinker');

        expect(blinker).to.be.instanceof(Pattern);

        expect(blinker.get()).to.be.deep.equal(
            [
                new Position(0, 1),
                new Position(1, 1),
                new Position(2, 1)
            ]
        );

    });

});
*/
