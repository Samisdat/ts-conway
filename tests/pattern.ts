/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import { expect } from 'chai';


import Position from '../lib/position';

import Pattern from '../lib/pattern';

describe('Pattern', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 0, 0] ,
                [ 1, 0, 0] 
            ]
        );

        expect(pattern).to.be.instanceof(Pattern);        

    });

    it('construct fails with row of uneven length', () => {

        var createPattern = () => {
            new Pattern(
                'Scottish',
                [
                    [ 0, 0, 0] ,
                    [ 1, 0]
                ]
            );
        };

        expect(createPattern).to.throw(Error, 'all rows must contain the same ammout of cols');

    });

    it('get width and height', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 0, 0],
                [ 1, 0, 0] 
            ]
        );

        expect(pattern.getWidth()).to.be.equal(3);
        expect(pattern.getHeight()).to.be.equal(2);

    });

    it('get', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 0, 0],
                [ 1, 0, 0], 
                [ 0, 0, 0] 
            ]
        );

        expect(pattern.get()).to.be.deep.equal(
            [new Position(0, 1)]
        );

    });
    
    it('mirrorHorizontal simple', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 0, 0],
                [ 1, 0, 0], 
                [ 0, 0, 0] 
            ]
        );

        pattern.mirrorHorizontal();
        expect(pattern.get()).to.be.deep.equal(
            [new Position(2, 1)]
        );

    });

    it('mirrorHorizontal', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 1, 0, 0],
                [ 0, 1, 0, 0] 
            ]
        );

        expect(pattern.mirrorHorizontal()).to.be.deep.equal(
            [
                new Position(2, 0),
                new Position(2, 1)
            ]
        );

    });

    it('mirrorVertical simple', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 1, 0],
                [ 0, 0, 0], 
                [ 0, 0, 0] 
            ]
        );

        expect(pattern.mirrorVertical()).to.be.deep.equal(
            [new Position(1, 2)]
        );

    });

    it('mirrorVertical', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 0, 0, 0],
                [ 0, 1, 1, 0], 
                [ 0, 0, 0, 0], 
                [ 0, 0, 0, 0] 
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

    it('rotate 90', () => {

        let pattern =  new Pattern(
            'Scottish',
            [
                [ 0, 0],
                [ 1, 0] 
            ]
        );

        expect(pattern.mirrorVertical()).to.be.deep.equal(
            [new Position(0, 0)]
        );

    });
    

});
