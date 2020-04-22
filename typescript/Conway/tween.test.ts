import { expect } from 'chai';

import { Tween } from 'Conway/tween';

describe('Tween', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let tween = new Tween(1);

        expect(tween).toBeInstanceOf(Tween);
        expect(tween.getStart()).toBe(1);
        expect(tween.getCurrent()).toBe(1);
        expect(tween.getEnd()).toBe(1);

    });

    it('one step', () => {

        let tween = new Tween(1);
        tween.setEnd(31);

        expect(tween.getStart()).toBe(1);
        expect(tween.getCurrent()).toBe(1);
        expect(tween.getEnd()).toBe(31);
        expect(tween.getStepsDone()).toBe(0);

        tween.update();

        expect(tween.getCurrent()).toBe(2);
        expect(tween.getStepsDone()).toBe(1);

    });

    it('from and to is the same', () => {

        let tween = new Tween(1);
        tween.setEnd(1);

        expect(tween.getStart()).toBe(1);
        expect(tween.getCurrent()).toBe(1);
        expect(tween.getEnd()).toBe(1);
        expect(tween.getStepsDone()).toBe(0);

        tween.update();

        expect(tween.getCurrent()).toBe(1);
        expect(tween.getStepsDone()).toBe(0);


    });

    it('all steps with integer values', () => {

        let steps = 10;

        let tween = new Tween(0, steps);
        tween.setEnd(10);

        expect(tween.getStart()).toBe(0);
        expect(tween.getCurrent()).toBe(0);
        expect(tween.getEnd()).toBe(10);

        for (let i = 0; i < steps; i += 1) {
            expect(tween.getCurrent()).toBe(i);
            expect(tween.getStepsDone()).toBe(i);
            tween.update();
        }

        expect(tween.getCurrent()).toBe(10);
        expect(tween.getStepsDone()).toBe(10);
        tween.update();
        expect(tween.getCurrent()).toBe(10);
        expect(tween.getStepsDone()).toBe(10);
        tween.update();
        expect(tween.getCurrent()).toBe(10);
        expect(tween.getStepsDone()).toBe(10);

    });

    it('all steps with float values', () => {

        let steps = 100;

        let tween = new Tween(0, steps);

        tween.setEnd(1);

        expect(tween.equal(1)).to.be.true;
        expect(tween.getStart()).toBe(0);
        expect(tween.getCurrent()).toBe(0);
        expect(tween.getEnd()).toBe(1);

        for (let i = 0; i <= steps; i += 1) {
            expect(Math.round(tween.getCurrent() * 100)).toBe(i);
            tween.update();
        }

        expect(tween.getCurrent()).toBe(1);
        tween.update();
        expect(tween.getCurrent()).toBe(1);
        tween.update();
        expect(tween.getCurrent()).toBe(1);


    });

    it('overwrite', () => {

        let tween = new Tween(1);
        tween.setEnd(31);

        tween.update();

        expect(tween.getStart()).toBe(1);
        expect(tween.getEnd()).toBe(31);
        expect(tween.getCurrent()).toBe(2);
        expect(tween.getStepsDone()).toBe(1);

        tween.overwrite(5);

        expect(tween.getStart()).toBe(5);
        expect(tween.getEnd()).toBe(5);
        expect(tween.getCurrent()).toBe(5);
        expect(tween.getStepsDone()).toBe(0);

    });


});
