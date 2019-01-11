export class Config {

    public readonly htmlId: string;

    public readonly cellWidth: number;

    public readonly debug: boolean;

    constructor(htmlId: string, cellWidth: number, debug = false) {

        this.htmlId = htmlId;

        this.cellWidth = cellWidth;

        this.debug = debug;

    }



}