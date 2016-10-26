export default class Position {

    public readonly  x: number;
    public readonly  y: number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    public move(position: Position):Position{
        return new Position(
            this.x + position.x,
            this.y + position.y
        );
    }

    public inverse():Position{
        return new Position(
            -1 * this.x,
            -1 * this.y
        );
    }
}