export class Config {

    public readonly htmlId: string;

    public readonly cellWidth: number;

    public readonly generationDuration: number;

    public readonly debug: boolean;

    constructor(htmlId: string, cellWidth: number, generationDuration:number, debug = false) {

        this.htmlId = htmlId;

        this.cellWidth = cellWidth;

        this.generationDuration = generationDuration;

        this.debug = debug;

    }

}