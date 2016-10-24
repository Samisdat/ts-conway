/// <reference path="../typings/mocha/mocha.d.ts" />
import Calculator from '../lib/index';

describe('Calculator', () => {
    var subject : Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result : number = subject.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });

    describe('#sub', () => {
        it('should substract two numbers', () => {
            var result : number = subject.sub(3, 2);
            if (result !== 1) {
                throw new Error('Expected 3 - 2 = 1 but was ' + result);
            }
        });
    });
});