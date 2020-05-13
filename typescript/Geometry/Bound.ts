export class Bound {

    private min: number;

    private max: number;

    constructor(min: number, max: number) {

        if (max < min) {
            throw new Error('max can not be lower then min');
        }

        this.min = min;
        this.max = max;
    }

    public isWithin(test: number): boolean {
        return (test >= this.min && test <= this.max);
    }

    public isBelow(test: number): boolean {
        return (test < this.min);
    }

    public isAbove(test: number): boolean {
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

    public getMax(): number{
        return this.max;
    }

    public getMin(): number{
        return this.min;
    }

    public expand(value: number): void{

        if(true === this.isWithin(value)){
            return;
        }

        if(true === this.isBelow(value)){
            this.min = value
        }

        if(true === this.isAbove(value)){
            this.max = value
        }

    }

}
