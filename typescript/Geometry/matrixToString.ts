import {Matrix} from '@Conway/Geometry/Matrix';
import {Position} from '@Conway/Geometry/Position';

const matrixToArray = (matrix: Matrix): number[][] => {

    const moved = new Matrix();

    const moveBy = matrix.getBound().bottomLeft().inverse();

    for (const position of matrix.all()) {

        moved.add(
            position.move(moveBy)
        );

    }

    const matrixAsArray: number[][] = [];

    for (let y = 0; y < matrix.height() + 1; y += 1) {

        const row: number[] = [];

        for (let x = 0; x < matrix.width() + 1; x += 1) {

            const cell: number = (true === moved.has(new Position(x, y))) ? 1 : 0;

            row.push(cell);

        }

        matrixAsArray.push(row);
    }

    return matrixAsArray;

}

const getHorizontalScale = (matrix: Matrix, matrixArray: string[][]): string[][] => {

    let left = 0;
    let right = 0;

    for (const position of matrix.all()) {

        if (position.x < left) {
            left = position.x;
        }

        if (position.x > right) {
            right = position.x;
        }

    }

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


const getVerticalScale = (matrix: Matrix, matrixArray: string[][]): string[][] => {

    let top = 0;
    let bottom = 0;

    for (const position of matrix.all()) {

        if (position.y < bottom) {
            bottom = position.y;
        }

        if (position.y > top) {
            top = position.y;
        }

    }
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

export const matrixToString = (matrix: Matrix, addScale = true): string => {

    if(0 === matrix.all().length){
        return 'Matrix is empty';
    }

    let matrixArray: string[][] = matrixToArray(matrix).reverse().map((row) =>{
        return row.map((col)=>{
            if(0 === col){
                return '.';
            }
            else{
                return 'O';
            }
        })
    });

    if(true === addScale){
        matrixArray = getHorizontalScale(matrix, matrixArray);
        matrixArray = getVerticalScale(matrix, matrixArray);
    }

    const str: string[] = [];

    for(let i = 0; i < matrixArray.length; i += 1){

        str.push(matrixArray[i].join(''))

    }

    return str.join('\n');

}
