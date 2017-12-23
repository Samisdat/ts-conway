export default class Bound {

    private min: number;
    private max: number;

    constructor(min: number, max: number) {

        if (max < min) {
            throw new Error('max can not be lower then min');
        }

        this.min = min;
        this.max = max;
    }

    public isWithin(test: number): Boolean {
        return (test >= this.min && test <= this.max);
    }

    public isBelow(test: number): Boolean {
        return (test < this.min);
    }

    public isAbove(test: number): Boolean {
        return (test > this.max);
    }

    public confine(value: number): number {

        if (value < this.min) {
            return this.min;
        }

        if (value > this.max) {
            return this.max;
        }

        return value;

    }

}