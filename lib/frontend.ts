import Position from './position';
import Habitat from './habitat';

export default class Frontend {

    private habitat: Habitat;

    private cols: number;
    private rows: number;

    private zero: Position;

    private pan: Position;
    
    constructor(cols:number, rows:number, habitat: Habitat) {
        this.cols = cols
        this.rows = rows

        this.zero = new Position(
            Math.floor(this.cols/2),
            Math.floor(this.rows/2)
        );
        
        this.pan = new Position(
            0,
            0
        );

        this.habitat = habitat;
    }

    public getHabitat(): Habitat {
        return this.habitat;
    }    
    
    public getPan(): Position {
        return this.pan;
    }

    public setPan(position: Position): void {
        this.pan = position;;
    } 

    public panBy(position: Position): void {
        this.pan = this.pan.move(position);
    }    

    public seed(position:Position):void {
        position = this.reverseMap(position);
        this.habitat.seed(position);
    }

    private reverseMap(position:Position):Position{

        position = position.move(this.zero.inverse());
        position = position.move(this.pan.inverse());

        return position;
    }

    public map(position:Position):Position{

        let mapped = this.zero.move(position);
        let moved = mapped.move(this.pan);

        return moved;
    }

    public get():Position[] {

        var mapped:Position[] = [];     

        var living:Position[] = this.habitat.get();

        for(let position of living){
            let map = this.map(position);

            mapped.push(map);
            
        }

        return mapped;
    }

    public elapse():void {

        this.habitat.elapse();

    }

    toString():string{
        let matrix = [];

        for(let y = 0; y < this.rows; y += 1){

            let row = [];

            for(let x = 0; x < this.cols; x += 1){
                row.push('0');
            }

            matrix.push(row);

        }

        var living:Position[] = this.get();

        for(let position of living){
            matrix[position.y][position.x] = 'X';
        }

        let out = [];

        out.push("\n");

        for(let row of matrix){

            let outRow = [];
            for(let cell of row){
                outRow.push("+-");
            }
            outRow.push("+\n");
            
            for(let cell of row){
                outRow.push('|');
                outRow.push(cell);
            }
            outRow.push('|');
            
            out.push(outRow.join(''));
        }

        return out.join("\n")   
    }

}