import { expect } from 'chai';

import Position from '../ts/position';
import TweenPosition from '../ts/tweenposition';

describe('PositionTween', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let tween = new TweenPosition(
            new Position(1, 1)
        );

        expect(tween).to.be.instanceof(TweenPosition);
        expect(tween.getStart()).to.be.deep.equal(new Position(1, 1));
        expect(tween.getCurrent()).to.be.deep.equal(new Position(1, 1));
        expect(tween.getEnd()).to.be.deep.equal(new Position(1, 1));

    });

    it('one step', () => {

        let tween = new TweenPosition(
            new Position(0, 0)
        );
        tween.setEnd(
            new Position(30, 60)
        );

        expect(tween.getStart()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getCurrent()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getEnd()).to.be.deep.equal(new Position(30, 60));

        tween.update();

        expect(tween.getCurrent()).to.be.deep.equal(new Position(1, 2));

    });

    it('from and to is the same', () => {

        let tween = new TweenPosition(
            new Position(0, 0)
        );
        tween.setEnd(
            new Position(0, 0)
        );

        expect(tween.getStart()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getCurrent()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getEnd()).to.be.deep.equal(new Position(0, 0));

        tween.update();

        expect(tween.getCurrent()).to.be.deep.equal(new Position(0, 0));

    });

    it('all steps with integer values', () => {

        var steps = 10;

        let tween = new TweenPosition(
            new Position(0, 0),
            steps
        );
        tween.setEnd(
            new Position(10, 20)
        );

        expect(tween.getStart()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getCurrent()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getEnd()).to.be.deep.equal(new Position(10, 20));

        for (let i = 0; i < steps; i += 1) {
            expect(tween.getCurrent()).to.be.deep.equal(new Position(i, i * 2));
            tween.update();
        }

        expect(tween.getCurrent()).to.be.deep.equal(new Position(10, 20));
        tween.update();
        expect(tween.getCurrent()).to.be.deep.equal(new Position(10, 20));
        tween.update();
        expect(tween.getCurrent()).to.be.deep.equal(new Position(10, 20));


    });

    it('all steps with float values', () => {

        var steps = 100;

        let tween = new TweenPosition(
            new Position(0, 0),
            steps
        );

        tween.setEnd(
            new Position(1, 2)
        );

        expect(tween.getStart()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getCurrent()).to.be.deep.equal(new Position(0, 0));
        expect(tween.getEnd()).to.be.deep.equal(new Position(1, 2));

        for (let i = 0; i <= steps; i += 1) {
            expect(Math.round(tween.getCurrent().x * 100)).to.be.equal(i);
            expect(Math.round(tween.getCurrent().y * 100)).to.be.equal(i * 2);
            tween.update();
        }

        expect(tween.getCurrent()).to.be.deep.equal(new Position(1, 2));
        tween.update();
        expect(tween.getCurrent()).to.be.deep.equal(new Position(1, 2));
        tween.update();
        expect(tween.getCurrent()).to.be.deep.equal(new Position(1, 2));

    });

});
