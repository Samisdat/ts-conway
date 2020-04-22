import { expect } from 'chai';

import { Position } from 'Conway/position';
import { TweenPosition } from 'Conway/tweenposition';

describe('PositionTween', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let tween = new TweenPosition(
            new Position(1, 1)
        );

        expect(tween).toBeInstanceOf(TweenPosition);
        expect(tween.getStart()).toStrictEqual(new Position(1, 1));
        expect(tween.getCurrent()).toStrictEqual(new Position(1, 1));
        expect(tween.getEnd()).toStrictEqual(new Position(1, 1));

    });

    it('one step', () => {

        let tween = new TweenPosition(
            new Position(0, 0)
        );
        tween.setEnd(
            new Position(30, 60)
        );

        expect(tween.getStart()).toStrictEqual(new Position(0, 0));
        expect(tween.getCurrent()).toStrictEqual(new Position(0, 0));
        expect(tween.getEnd()).toStrictEqual(new Position(30, 60));

        tween.update();

        expect(tween.getCurrent()).toStrictEqual(new Position(1, 2));

    });

    it('from and to is the same', () => {

        let tween = new TweenPosition(
            new Position(0, 0)
        );
        tween.setEnd(
            new Position(0, 0)
        );

        expect(tween.getStart()).toStrictEqual(new Position(0, 0));
        expect(tween.getCurrent()).toStrictEqual(new Position(0, 0));
        expect(tween.getEnd()).toStrictEqual(new Position(0, 0));

        tween.update();

        expect(tween.getCurrent()).toStrictEqual(new Position(0, 0));

    });

    it('all steps with integer values', () => {

        let steps = 10;

        let tween = new TweenPosition(
            new Position(0, 0),
            steps
        );
        tween.setEnd(
            new Position(10, 20)
        );

        expect(tween.getStart()).toStrictEqual(new Position(0, 0));
        expect(tween.getCurrent()).toStrictEqual(new Position(0, 0));
        expect(tween.getEnd()).toStrictEqual(new Position(10, 20));

        for (let i = 0; i < steps; i += 1) {
            expect(tween.getCurrent()).toStrictEqual(new Position(i, i * 2));
            tween.update();
        }

        expect(tween.getCurrent()).toStrictEqual(new Position(10, 20));
        tween.update();
        expect(tween.getCurrent()).toStrictEqual(new Position(10, 20));
        tween.update();
        expect(tween.getCurrent()).toStrictEqual(new Position(10, 20));


    });

    it('all steps with float values', () => {

        let steps = 100;

        let tween = new TweenPosition(
            new Position(0, 0),
            steps
        );

        tween.setEnd(
            new Position(1, 2)
        );

        expect(tween.getStart()).toStrictEqual(new Position(0, 0));
        expect(tween.getCurrent()).toStrictEqual(new Position(0, 0));
        expect(tween.getEnd()).toStrictEqual(new Position(1, 2));

        for (let i = 0; i <= steps; i += 1) {
            expect(Math.round(tween.getCurrent().x * 100)).toBe(i);
            expect(Math.round(tween.getCurrent().y * 100)).toBe(i * 2);
            tween.update();
        }

        expect(tween.getCurrent()).toStrictEqual(new Position(1, 2));
        tween.update();
        expect(tween.getCurrent()).toStrictEqual(new Position(1, 2));
        tween.update();
        expect(tween.getCurrent()).toStrictEqual(new Position(1, 2));

    });

    it('equal', () => {

        let positionA = new Position(-5, 5);
        let positionB = new Position(-5, 5);
        let positionC = new Position(-5, 5);
        let positionD = new Position(2, 3);

        let tween = new TweenPosition(
            positionA
        );

        tween.setEnd(positionB);

        expect(tween.equal(positionC)).toBeTruthy;
        expect(tween.equal(positionD)).toBeFalsy;

    });

    it('overwrite', () => {

        let tween = new TweenPosition(
            new Position(0, 0)
        );
        tween.setEnd(
            new Position(30, 60)
        );


        tween.update();
        expect(tween.getStart()).toStrictEqual(new Position(0, 0));
        expect(tween.getEnd()).toStrictEqual(new Position(30, 60));
        expect(tween.getCurrent()).toStrictEqual(new Position(1, 2));
        expect(tween.getStepsDone()).toBe(1);

        tween.overwrite(new Position(5, 10));

        expect(tween.getStart()).toStrictEqual(new Position(5, 10));
        expect(tween.getEnd()).toStrictEqual(new Position(5, 10));
        expect(tween.getCurrent()).toStrictEqual(new Position(5, 10));
        expect(tween.getStepsDone()).toBe(0);

    });


});
