import { expect } from 'chai';

import {Config} from './Config';
import {GridDimension} from 'Grid/GridDimension';

describe('Config', () => {

    it('can be created', () => {

        let config = new Config({
            'htmlId': 'foo'
        });

        expect(config).to.be.instanceof(Config);

    });

    it('htmlId', () => {

        let config = new Config({
            'htmlId': 'foo'
        });
        expect(config.htmlId).to.be.equal('foo');


        expect(() => {
            new Config();
        }).to.throw(
            Error, 'htmlId is mandatory'
        );

    });

    it('cellWidth and its default', () => {

        let config = new Config({
            'htmlId': 'foo'
        });

        expect(config.cellWidth).to.be.equal(50);

        config = new Config({
            'htmlId': 'foo',
            'cellWidth': 150
        });

        expect(config.cellWidth).to.be.equal(150);


    });

    it('generationDuration and its default', () => {

        let config = new Config({
            'htmlId': 'foo'
        });

        expect(config.generationDuration).to.be.equal(500);

        config = new Config({
            'htmlId': 'foo',
            'generationDuration': 1000
        });

        expect(config.generationDuration).to.be.equal(1000);


    });

    it('debug and its default', () => {

        let config = new Config({
            'htmlId': 'foo'
        });

        expect(config.debug).to.be.false;

        config = new Config({
            'htmlId': 'foo',
            'debug': true
        });

        expect(config.debug).to.be.true;

    });

});
