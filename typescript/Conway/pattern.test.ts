import { expect } from 'chai';

import { Position } from './position';

import { Pattern } from './pattern';

describe('Pattern', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 0, 0],
                [1, 0, 0]
            ]
        );

        expect(pattern).to.be.instanceof(Pattern);

    });

    it('construct fails with row of uneven length', () => {

        let createPattern = () => {
            new Pattern(
                'Scottish',
                [
                    [0, 0, 0],
                    [1, 0]
                ]
            );
        };

        expect(createPattern).to.throw(Error, 'all rows must contain the same ammout of cols');

    });

    it('get width and height', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 0, 0],
                [1, 0, 0]
            ]
        );

        expect(pattern.getWidth()).to.be.equal(3);
        expect(pattern.getHeight()).to.be.equal(2);

    });

    it.skip('get', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 0, 0],
                [1, 0, 0],
                [0, 0, 0]
            ]
        );

        expect(pattern.get()).to.be.deep.equal(
            [new Position(0, 1)]
        );

    });

    it.skip('mirrorHorizontal simple', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 0, 0],
                [1, 0, 0],
                [0, 0, 0]
            ]
        );

        pattern.mirrorHorizontal();
        expect(pattern.get()).to.be.deep.equal(
            [new Position(2, 1)]
        );

    });

    it.skip('mirrorHorizontal', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ]
        );

        pattern.mirrorHorizontal();

        expect(pattern.get()).to.be.deep.equal(
            [
                new Position(2, 0),
                new Position(2, 1)
            ]
        );

    });

    it.skip('mirrorVertical simple', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 1, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        );
        pattern.mirrorVertical();
        expect(pattern.get()).to.be.deep.equal(
            [new Position(1, 2)]
        );

    });

    it.skip('mirrorVertical', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        );
        pattern.mirrorVertical();

        expect(pattern.get()).to.be.deep.equal(
            [
                new Position(1, 2),
                new Position(2, 2)
            ]
        );

    });

    it('rotate throw when angle is not a multiple of 90', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [1, 0],
                [0, 0]
            ]
        );

        pattern.rotate(0);
        pattern.rotate(90);
        pattern.rotate(180);
        pattern.rotate(270);
        pattern.rotate(360);

        let invalid = function () {
            pattern.rotate(1);
        };

        expect(invalid).to.throw(Error, 'angle must be 0 or a multiple of 90');

    });

    it('rotate throw when angle is not a multiple of 90', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [1, 0],
                [0, 0]
            ]
        );

        expect(pattern.getRotateSteps(-720)).to.be.equal(0);
        expect(pattern.getRotateSteps(-630)).to.be.equal(1);
        expect(pattern.getRotateSteps(-540)).to.be.equal(2);
        expect(pattern.getRotateSteps(-450)).to.be.equal(3);
        expect(pattern.getRotateSteps(-360)).to.be.equal(0);
        expect(pattern.getRotateSteps(-270)).to.be.equal(1);
        expect(pattern.getRotateSteps(-180)).to.be.equal(2);
        expect(pattern.getRotateSteps(-90)).to.be.equal(3);
        expect(pattern.getRotateSteps(0)).to.be.equal(0);
        expect(pattern.getRotateSteps(90)).to.be.equal(1);
        expect(pattern.getRotateSteps(180)).to.be.equal(2);
        expect(pattern.getRotateSteps(270)).to.be.equal(3);
        expect(pattern.getRotateSteps(360)).to.be.equal(0);
        expect(pattern.getRotateSteps(450)).to.be.equal(1);
        expect(pattern.getRotateSteps(540)).to.be.equal(2);
        expect(pattern.getRotateSteps(630)).to.be.equal(3);
        expect(pattern.getRotateSteps(720)).to.be.equal(0);


    });

    it.skip('rotate 90', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [1, 0, 0],
                [0, 0, 1],
                [1, 0, 0]
            ]
        );

        pattern.rotate(90);

        expect(pattern.get()).to.be.deep.equal(
            [
                new Position(0, 0),
                new Position(2, 0),
                new Position(1, 2)
            ]
        );

    });

    it.skip('rotate -90', () => {

        let pattern = new Pattern(
            'Scottish',
            [
                [1, 0, 0],
                [1, 0, 0],
                [1, 0, 0]
            ]
        );

        pattern.rotate(-90);

        expect(pattern.get()).to.be.deep.equal(
            [
                new Position(0, 2),
                new Position(1, 2),
                new Position(2, 2)
            ]
        );

    });

});
