import { expect } from 'chai';


import Patterns from '../src/Patterns';

describe('Patterns', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let patterns = new Patterns();

        expect(patterns).to.be.instanceof(Patterns);

    });

});
