import {Matrix} from '@Conway/Geometry/Matrix';
import {Position} from '@Conway/Geometry/Position';

interface NumberedScale {
    sign: string[];
    number: string[];
};

const getSigns = (numberedScale: NumberedScale, i: number) =>{
    if(0 === i % 5){

        numberedScale.number.push(Math.abs(i).toString());

        if(0 > i){
            numberedScale.sign.push('-');
        }
        else if(0 < i){
            numberedScale.sign.push('+');
        }
        else{
            numberedScale.sign.push(' ');
        }

    }
    else{
        numberedScale.number.push(' ');
        numberedScale.sign.push(' ');
    }

};

const getScaleHorizontal = (matrix: Matrix, matrixArray: string[][]): string[][] => {

    const left = matrix.getBound().bottomLeft().x;
    const right  = matrix.getBound().topRight().x;

    matrixArray = matrixArray.reverse();

    const newRow: string[] = []
    for(let i = 0; i < matrixArray[0].length; i += 1){
        newRow.push('')
    }

    matrixArray.push(newRow);

    const scale: NumberedScale = {
        sign: [],
        number: [],
    };

    for(let i = left; i <= right; i += 1){

        getSigns(scale, i);
    }

    matrixArray.push(scale.number);
    matrixArray.push(scale.sign);

    matrixArray = matrixArray.reverse();
    return matrixArray;


};

const getScaleVertical = (matrix: Matrix, matrixArray: string[][]): string[][] => {

    const top  = matrix.getBound().topRight().y;
    const bottom = matrix.getBound().bottomLeft().y;

    const scale: NumberedScale = {
        sign: [' ', ' ', ' '],
        number: [' ', ' ', ' '],
    };

    for(let i = top; i >= bottom; i -= 1){

        getSigns(scale, i);

    }

    for(let i = 0; i < matrixArray.length; i += 1){

        matrixArray[i] = matrixArray[i].reverse();

        matrixArray[i].push(' ')
        matrixArray[i].push(' ')

        matrixArray[i].push(scale.number[i])
        matrixArray[i].push(scale.sign[i])

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

    return matrixOfStrings.map((row)=>{return row.join('')}).join('\n');;

}
