/**
 * @jest-environment jsdom
 */
import {Web} from '@Conway/Frontend/Web';
import {gunsAndEaters} from '@Conway/Seed/guns_and_eaters';
import {NoControl} from '@Conway/Control/ControlNo';
import {MainControl} from '@Conway/Control/ControlMain';
import {CELL_WIDTH} from '@Conway/Constants';


jest.useFakeTimers();
describe('Frontend/Web', () => {

    let element: HTMLElement;

    beforeAll(() => {

        element = document.createElement('div');

    });

    test('can be created without control', () => {

        let frontend = new Web(
            element,
            gunsAndEaters,
            new NoControl()
        );

        expect(frontend).toBeInstanceOf(Web);

    });

    test('can be created with maincontrol', () => {

        let frontend = new Web(
            element,
            gunsAndEaters,
            new MainControl(element, CELL_WIDTH)
        );

        expect(frontend).toBeInstanceOf(Web);

    });

    test('can be created with maincontrol', () => {

        let frontend = new Web(
            element,
            gunsAndEaters,
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
                gunsAndEaters,
                new MainControl(element, CELL_WIDTH)
            );

            jest.runOnlyPendingTimers();

            expect(frontend).toBeInstanceOf(Web);

        });
    });
});
