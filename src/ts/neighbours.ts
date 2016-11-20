import Position from './position';

export default function getNeighbours(position: Position): Position[] {
    let neighbours: Position[] = [];

    let x: number = position.x;
    let y: number = position.y;

    // neighbours on bottom
    neighbours.push(
        new Position(x - 1, y - 1)
    );
    neighbours.push(
        new Position(x, y - 1)
    );
    neighbours.push(
        new Position(x + 1, y - 1)
    );

    // neighbours on the left and on the right
    neighbours.push(
        new Position(x - 1, y)
    );
    neighbours.push(
        new Position(x + 1, y)
    );

    // neighbours on top
    neighbours.push(
        new Position(x - 1, y + 1)
    );
    neighbours.push(
        new Position(x, y + 1)
    );
    neighbours.push(
        new Position(x + 1, y + 1)
    );

    return neighbours;
}