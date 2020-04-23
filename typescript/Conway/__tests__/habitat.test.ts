import {Position} from '../position';
import {Habitat} from '../habitat';
import {Patterns} from '../patterns';


describe('Habitat', () => {

    beforeEach(function () {
    });

    it('can be created', () => {

        let habitat = new Habitat(1000);

        expect(habitat).toBeInstanceOf(Habitat);

    });

    it('seed a cell', () => {

        let habitat = new Habitat(1000);
        expect(habitat.getAllCells()).toStrictEqual([]);

        habitat.seed(
            new Position(0, 1)
        );

        let cells = habitat.getAllCells();
        expect(cells.length).toBe(1);
        expect(cells[0].x).toBe(0);
        expect(cells[0].y).toBe(1);

    });

    it('elapse with one cell', () => {

        let habitat = new Habitat(1000);
        expect(habitat.getAllCells()).toStrictEqual([]);

        habitat.seed(
            new Position(0, 1)
        );

        expect(habitat.get()).toStrictEqual([new Position(0, 1)]);

    });

    it('elapse with a blinker', () => {

        let habitat = new Habitat(1000);
        expect(habitat.get()).toStrictEqual([]);
        expect(habitat.getAllCells()).toStrictEqual([]);

        habitat.seed(
            new Position(0, 0)
        );
        habitat.seed(
            new Position(0, 1)
        );
        habitat.seed(
            new Position(0, 2)
        );

        expect(habitat.get()).toStrictEqual([
            new Position(0, 0),
            new Position(0, 1),
            new Position(0, 2)
        ]);

        habitat.elapse();

        expect(habitat.get()).toStrictEqual([
            new Position(0, 1),
            new Position(-1, 1),
            new Position(1, 1)
        ]);

        // check garbage collection
        expect(habitat.getAllCells().length).toBe(3);


        habitat.elapse();

        expect(habitat.get()).toStrictEqual([
            new Position(0, 1),
            new Position(0, 0),
            new Position(0, 2)
        ]);

        expect(habitat.getAllCells().length).toBe(3);

    });

    it('seed a pattern', () => {

        const patterns = new Patterns();

        let habitat = new Habitat(1000);
        expect(habitat.get()).toStrictEqual([]);
        expect(habitat.getAllCells()).toStrictEqual([]);

        habitat.seedPattern(patterns.get('blinker'));

        expect(habitat.get()).toStrictEqual([
            new Position(-1, 0),
            new Position(0, 0),
            new Position(1, 0)
        ]);

    });

});

/*
describe('Habitat aging with interval', function() {

    let habitat = new Habitat(50);

    let sandbox: SinonSandbox;

    let clock: SinonFakeTimers;

    let stubElapse: SinonStub;

    before(function() {

        sandbox = sinon.createSandbox();

        stubElapse = sandbox.stub(habitat, 'elapse' as any);

        clock = sinon.useFakeTimers();

    });

    after(function() {

        clock = sinon.restore();

        sandbox.restore();

    });

    it('should increase position', function() {

        sinon.assert.notCalled(stubElapse);

        habitat.startAging();

        sinon.assert.notCalled(stubElapse);

        clock.tick(51);

        sinon.assert.calledOnce(stubElapse);

        clock.tick(51);

        sinon.assert.calledTwice(stubElapse);

    });
});
*/