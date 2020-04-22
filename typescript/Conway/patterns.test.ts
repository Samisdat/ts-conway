import { expect } from 'chai';


import { Position } from 'Conway/position';
import { Pattern  } from 'Conway/pattern';
import { Patterns  } from 'Conway/patterns';

describe('Patterns', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let patterns = new Patterns();

        expect(patterns).toBeInstanceOf(Patterns);

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

        expect(blinker).toBeInstanceOf(Pattern);

        expect(blinker.get()).toStrictEqual(
            [
                new Position(-1, 0),
                new Position(0, 0),
                new Position(1, 0)
            ]
        );


    });

});
