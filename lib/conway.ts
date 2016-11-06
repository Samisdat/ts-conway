import Position from './position';
import Habitat from './habitat';
import Frontend from './frontend';

var start = function () {

  let frontend = new Frontend(
        25, 
        10, 
        new Habitat()
    );

    frontend.seed(
        new Position(1, 0)
    );
    frontend.seed(
        new Position(1, 1)
    );
    frontend.seed(
        new Position(1, 2)
    );

    console.log(frontend.get());
    frontend.elapse();
    console.log(frontend.get());

};

start();