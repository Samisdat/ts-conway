import { expect } from 'chai';


import { Position } from 'Conway/position';
import { Pattern  } from 'Conway/pattern';
import { Patterns  } from 'Conway/patterns';

describe('Patterns', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let patterns = new Patterns();

        expect(patterns).to.be.instanceof(Patterns);

    });

    it('construct fails with unkown pattern', () => {

        let createPattern = () => {

            let patterns = new Patterns();
            patterns.get('foobar');
        };

        expect(createPattern).to.throw(Error, 'unkown pattern foobar');

    });

    it('can get blinker', () => {

        let patterns = new Patterns();

        let blinker = patterns.get('blinker');

        expect(blinker).to.be.instanceof(Pattern);

        expect(blinker.get()).to.be.deep.equal(
            [
                new Position(-1, 0),
                new Position(0, 0),
                new Position(1, 0)
            ]
        );


    });

});
