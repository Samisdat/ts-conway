import Position from './position';
import Tween from './tween';

export default class TweenPosition {

    private steps: number;

    private x: Tween;
    private y: Tween;

    constructor(start: Position, steps = 30) {

        this.steps = steps;

        this.x = new Tween(start.x, this.steps);
        this.y = new Tween(start.x, this.steps);
    }

    public equal(position: Position): Boolean {
        return (position.x === this.x.getEnd() && position.y === this.y.getEnd());
    }

    public setEnd(end: Position): void {
        this.x.setEnd(end.x);
        this.y.setEnd(end.y);
    }

    public overwrite(overwrite: Position): void {
        this.x.overwrite(overwrite.x);
        this.y.overwrite(overwrite.y);
    }

    public getStart(): Position {
        return new Position(
            this.x.getStart(),
            this.y.getStart(),
        );
    }

    public getCurrent(): Position {
        return new Position(
            this.x.getCurrent(),
            this.y.getCurrent(),
        );
    }
    public getEnd(): Position {
        return new Position(
            this.x.getEnd(),
            this.y.getEnd(),
        );
    }

    public update(): void {

        this.x.update();
        this.y.update();

    }

    public getStepsDone(): number {
        return this.x.getStepsDone();
    }

}