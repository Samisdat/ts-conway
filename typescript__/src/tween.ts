export default class Tween {

    private start: number;
    private end: number;
    private current: number;

    private stepInterval: number;

    private steps: number;
    private stepsDone: number = 0;

    constructor(start: number, steps = 30) {

        this.start = start;
        this.end = start;
        this.current = start;
        this.steps = steps;

    }

    public equal(end: number): Boolean {

        return end === this.end;

    }

    public overwrite(overwrite: number): void {

        this.end = overwrite;
        this.start = overwrite;
        this.current = overwrite;

        this.stepsDone = 0;

    }

    public setEnd(end: number): void {

        this.end = end;
        this.start = this.current;

        this.stepsDone = 0;

        if (end === this.start) {
            this.stepInterval = 0;
            return;
        }

        const diff = end - this.start;

        this.stepInterval = diff / this.steps;

    }

    public getStart(): number {

        return this.start;

    }

    public getCurrent(): number {

        return this.current;

    }

    public getEnd(): number {

        return this.end;

    }

    public update(): void {

        if (true === this.equal(this.current)) {
            return;
        }

        this.current += this.stepInterval;

        this.stepsDone += 1;

        if (this.steps === this.stepsDone) {
            this.current = this.end;
        }

    }

    public getStepsDone(): number {

        return this.stepsDone;

    }

}