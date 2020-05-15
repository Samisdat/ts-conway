import {Matrix} from '@Conway/Geometry/Matrix';
import {Position} from '@Conway/Geometry/Position';

const getScaleHorizontal = (matrix: Matrix, matrixArray: string[][]): string[][] => {

    const left = matrix.getBound().bottomLeft().x;
    const right  = matrix.getBound().topRight().x;

    matrixArray = matrixArray.reverse();

    const newRow: string[] = []
    for(let i = 0; i < matrixArray[0].length; i += 1){
        newRow.push('')
    }

    matrixArray.push(newRow);

    const scaleRow: string[] = [];
    const signRow: string[] = [];

    for(let i = left; i <= right; i += 1){

        if(0 === i % 5){
            scaleRow.push(Math.abs(i).toString());

            if(0 > i){
                signRow.push('-');
            }
            else if(0 < i){
                signRow.push('+');
            }
            else{
                signRow.push(' ');
            }

        }
        else{
            scaleRow.push(' ');
            signRow.push(' ');
        }

    }

    matrixArray.push(scaleRow);
    matrixArray.push(signRow);

    matrixArray = matrixArray.reverse();
    return matrixArray;


};

const getScaleVertical = (matrix: Matrix, matrixArray: string[][]): string[][] => {

    const top  = matrix.getBound().topRight().y;
    const bottom = matrix.getBound().bottomLeft().y;

    const scale: string[] = [' ', ' ', ' '];
    const sign: string[] = [' ', ' ', ' '];

    for(let i = top; i >= bottom; i -= 1){

        if(0 === i % 5){
            scale.push(Math.abs(i).toString());

            if(0 > i){
                sign.push('-');
            }
            else if(0 < i){
                sign.push('+');
            }
            else{
                sign.push(' ');
            }

        }
        else{
            scale.push(' ');
            sign.push(' ');
        }

    }

    for(let i = 0; i < matrixArray.length; i += 1){

        matrixArray[i] = matrixArray[i].reverse();

        matrixArray[i].push(' ')
        matrixArray[i].push(' ')

        matrixArray[i].push(scale[i])
        matrixArray[i].push(sign[i])

        matrixArray[i] = matrixArray[i].reverse();

    }

    return matrixArray;

};


const addScale = (matrix: Matrix, matrixString: string[][]): string[][] => {

    matrixString = getScaleHorizontal(matrix, matrixString);
    matrixString = getScaleVertical(matrix, matrixString);
    return matrixString;
};

export const matrixToString = (matrix: Matrix, scale = true): string => {

    if(0 === matrix.all().length){
        return 'Matrix is empty';
    }

    const width = matrix.width();
    const height = matrix.height();

    const topLeft = new Position(
        matrix.getBound().bottomLeft().x,
        matrix.getBound().topRight().y
    );

    let matrixOfStrings: string[][] = [];

    let pointer = topLeft.clone();

    for(let y = 0; y < height; y += 1){

        const line = [];

        for(let x = 0; x < width; x += 1){

            //console.log(pointer)

            if(true === matrix.has(pointer)){
                line.push('O');
            }
            else{
                line.push('.');
            }


            pointer = pointer.move(new Position(1,0));

        }

        matrixOfStrings.push(line);

        pointer = new Position(
            topLeft.x,
            pointer.y - 1
        );

    }


    if(true === scale){
        matrixOfStrings = addScale(matrix, matrixOfStrings);
    }

    const matrixString = matrixOfStrings.map((row)=>{return row.join('')}).join('\n');

    return matrixString;

}
