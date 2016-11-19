import { expect } from 'chai';

import Tween from '../ts/tween';

describe('Tween', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let tween =  new Tween(1);

        expect(tween).to.be.instanceof(Tween);        
        expect(tween.getStart()).to.be.equal(1);                
        expect(tween.getCurrent()).to.be.equal(1);                
        expect(tween.getEnd()).to.be.equal(1);                

    });

    it('one step', () => {

        let tween =  new Tween(1);
        tween.setEnd(31);

        expect(tween.getStart()).to.be.equal(1);                
        expect(tween.getCurrent()).to.be.equal(1);                
        expect(tween.getEnd()).to.be.equal(31);                
        expect(tween.getStepsDone()).to.be.equal(0);                

        tween.update();
        
        expect(tween.getCurrent()).to.be.equal(2);                        
        expect(tween.getStepsDone()).to.be.equal(1);                
        
    });

    it('from and to is the same', () => {

        let tween =  new Tween(1);
        tween.setEnd(1);

        expect(tween.getStart()).to.be.equal(1);                
        expect(tween.getCurrent()).to.be.equal(1);                
        expect(tween.getEnd()).to.be.equal(1);                
        expect(tween.getStepsDone()).to.be.equal(0);                

        tween.update();

        expect(tween.getCurrent()).to.be.equal(1);                
        expect(tween.getStepsDone()).to.be.equal(0);                
        
        
    });

    it('all steps with integer values', () => {

        var steps = 10;

        let tween =  new Tween(0, steps);
        tween.setEnd(10);

        expect(tween.getStart()).to.be.equal(0);                
        expect(tween.getCurrent()).to.be.equal(0);                
        expect(tween.getEnd()).to.be.equal(10);                

        for(let i = 0; i < steps; i += 1){
            expect(tween.getCurrent()).to.be.equal(i);                
            expect(tween.getStepsDone()).to.be.equal(i);                
            tween.update();
        }
        
        expect(tween.getCurrent()).to.be.equal(10);                
        expect(tween.getStepsDone()).to.be.equal(10);                
        tween.update();
        expect(tween.getCurrent()).to.be.equal(10);                
        expect(tween.getStepsDone()).to.be.equal(10);                
        tween.update();
        expect(tween.getCurrent()).to.be.equal(10);                
        expect(tween.getStepsDone()).to.be.equal(10);                

    });

    it('all steps with float values', () => {

        var steps = 100;

        let tween =  new Tween(0, steps);

        tween.setEnd(1);

        expect(tween.getStart()).to.be.equal(0);                
        expect(tween.getCurrent()).to.be.equal(0);                
        expect(tween.getEnd()).to.be.equal(1);                

        for(let i = 0; i <= steps; i += 1){
            expect(Math.round(tween.getCurrent()* 100)).to.be.equal(i);
            tween.update();
        }
        
        expect(tween.getCurrent()).to.be.equal(1);                
        tween.update();
        expect(tween.getCurrent()).to.be.equal(1);                
        tween.update();
        expect(tween.getCurrent()).to.be.equal(1);                


    });

});
