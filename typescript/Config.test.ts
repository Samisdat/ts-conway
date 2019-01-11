import { expect } from 'chai';

import {Config} from './Config';

describe('Config', () => {

    it('can be created', () => {

        let config = new Config(
            'conway', 50
        );

        expect(config).to.be.instanceof(Config);

    });


});
