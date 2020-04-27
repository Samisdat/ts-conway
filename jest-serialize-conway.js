module.exports = {
  serialize(val, config, indentation, depth, refs, printer) {

    const allCells = val.getAllCells();

    let top = 0;
    let bottom = 0;

    let left = 0;
    let right = 0;

    for(let cell of allCells){

      if(cell.x < left){
        left = cell.x
      }

      if(cell.x > right){
        right = cell.x
      }

      if(cell.y < bottom){
        bottom = cell.y
      }

      if(cell.y > top){
        top = cell.y
      }

    }

    left = left -1;
    right = right +1;
    top = top  + 1;
    bottom = bottom -1;

    let output = '';

    for(let y = top; y >= bottom; y -= 1){

      for(let x = left; x <= right; x += 1){

        let currentCell = 'O'


        for(let cell of allCells) {
          if(cell.x === x && cell.y === y){
            currentCell = 'X'
          }
        }

        output += currentCell;

      }
      output += '\n';
    }

    return output.trim();
  },

  test(val) {

    return val && ('Habitat' === val.constructor.name);

    return val && val.hasOwnProperty('foo');
  },
};
