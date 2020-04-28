import {Patterns} from '../Patterns';
import {Position} from '../Position';
import {Pattern} from '../Pattern';
import serializer from '../../../jest-serialize-conway';

describe('Patterns', () => {

    beforeEach(function () {
        expect.addSnapshotSerializer(serializer);
    });

    test('can be created', () => {

        let patterns = new Patterns();

        expect(patterns).toBeInstanceOf(Patterns);

    });

    test('construct fails with unkown pattern', () => {

        let createPattern = () => {

            let patterns = new Patterns();
            patterns.get('foobar');
        };

        expect(createPattern).toThrowErrorMatchingSnapshot();

    });

    const allPatterns = [
        'rotate',
        'block',
        'beehive',
        'loaf',
        'boat',
        'blinker',
        'toad',
        'beacon',
        'pulsar',
        'revolver',
        'glider',
        'lightweight_spaceship',
        'r_pentomino',
        'diehard',
        'acorn',
        'gosper_glider_gun',
        'exhibit_infinite_growth_1',
        'glider_eater',
        'guns_and_eaters',
    ];

    for (const pattern of allPatterns) {

        test('pattern ' + pattern, () => {

            let patterns = new Patterns();

            let blinker = patterns.get(pattern);

            expect(blinker.getMatrix()).toMatchSnapshot();

        });

    }

});
