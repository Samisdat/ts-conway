/**
 * @jest-environment jsdom
 */
import {Web} from '../Web';
import {NoControl} from '../../Control/ControlNo';
import {MainControl} from '../../Control/ControlMain';
import {CELL_WIDTH} from '../../Constants';
import {guns_and_eaters} from '../../Seed/guns_and_eaters';
import {doc} from 'prettier';

jest.useFakeTimers();
describe('Frontend/Web', () => {

    let element: HTMLElement;



    beforeAll(() => {

        element = document.createElement('div');

    });

    test('can be created without control', () => {

        let frontend = new Web(
            element,
            guns_and_eaters,
            new NoControl()
        );

        expect(frontend).toBeInstanceOf(Web);

    });

    test('can be created with maincontrol', () => {

        let frontend = new Web(
            element,
            guns_and_eaters,
            new MainControl(element, CELL_WIDTH)
        );

        expect(frontend).toBeInstanceOf(Web);

    });

    test('can be created with maincontrol', () => {

        let frontend = new Web(
            element,
            guns_and_eaters,
            new MainControl(element, CELL_WIDTH)
        );

        window.dispatchEvent(new Event( 'load', {}));

        window.dispatchEvent(new Event( 'resize', {}));

        expect(frontend).toBeInstanceOf(Web);

    });

    describe('Looping', () => {

        let requestAnimationFrame: any;

        beforeAll(() => {

            requestAnimationFrame = window.requestAnimationFrame;

            window.requestAnimationFrame = (callback: FrameRequestCallback): number => {

                setTimeout(callback, 60);

                return 1;

            };

        });

        afterAll(() => {

            window.requestAnimationFrame = requestAnimationFrame;

        });

        test('start the loop', () => {

            let frontend = new Web(
                element,
                guns_and_eaters,
                new MainControl(element, CELL_WIDTH)
            );

            jest.runOnlyPendingTimers();

            expect(frontend).toBeInstanceOf(Web);

        });
    });
});
