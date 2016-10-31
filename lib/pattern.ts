import Position from './position';

export default class Pattern {

    private positions:Position[] = []   ;

    private width:number;

    private height:number;

    constructor(name: String, matrix: number[][]) {

        this.setPattern(matrix);

    }

    private validatePattern(matrix: number[][]):void{
        let lengths = [];

        for(let row of matrix){
            lengths.push(row.length);
        }

        lengths = lengths.filter(function(value, index, self) { 
            return self.indexOf(value) === index;
        });

        if(1 !== lengths.length){
            throw new Error('all rows must contain the same ammout of cols');
        }

        this.height = matrix.length;
        this.width = matrix[0].length;
    }

    private setPattern(matrix: number[][]):void{

        this.validatePattern(matrix);

        for(let row = 0; row < matrix.length; row += 1 ){

            for(let col = 0; col < matrix[row].length; col += 1 ){
                
                if(1 === matrix[row][col]){
                    this.positions.push(
                        new Position(col, row)
                    );
                }

            }        

        }        

    }


    public get(){
        return this.positions;   
    }

    public getWidth():number{
        return this.width;
    }

    public getHeight():number{
        return this.height;        
    }
    
    public mirrorVertical():Position[]{

        let mirroredPositions:Position[] = [];        
        for(let i = 0, x = this.positions.length; i < x; i += 1){

            let position:Position = this.positions[i];

            let mirroredPosition:Position = new Position(
                position.x,
                this.width - 1 - position.y
            );

            mirroredPositions.push( mirroredPosition);
       }

       return mirroredPositions;

    }
    public mirrorHorizontal():Position[]{
        
        let mirroredPositions:Position[] = [];        
        for(let i = 0, x = this.positions.length; i < x; i += 1){

            let position:Position = this.positions[i];

            let mirroredPosition:Position = new Position(
                this.width - 1 - position.x,
                position.y
            );

            mirroredPositions.push( mirroredPosition);
       }

       return mirroredPositions;

    }

    public rotate():Position[]{
        let rotatedPositions:Position[] = [];        
        for(let i = 0, x = this.positions.length; i < x; i += 1){

            let position:Position = this.positions[i];

            let rotatedPosition:Position = new Position(
                this.width - 1 - position.x,
                position.y
            );

            rotatedPositions.push( rotatedPosition);
       }

       return rotatedPositions;
        
    }
    
}