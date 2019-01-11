export class Integer {

    public readonly value: number;

    constructor(value: number) {

        this.ensureInteger(value);

        this.value = value;

    }

    private ensureInteger(value: number) {

        if (0 !== value % 1) {
            throw new Error('not an integer value');
        }

    }

}