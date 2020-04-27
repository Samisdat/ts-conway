const blessed = require('neo-blessed');

// Create a screen object.
const cli = blessed.screen({
    smartCSR: true
});

cli.title = 'Conway game of live';

// Create a box perfectly centered horizontally and vertically.
const box = blessed.table({
    tags: true,
    border: {
        type: 'line'
    },
    style: {
        fg: 'white',
        bg: 'magenta',
        border: {
            fg: '#fOfOfO'
        },
        hover: {
            bg: 'green'
        }
    }
});

box.setData([
    [ 'O', 'X',  'O'  ],
    [ 'O', 'X',  'O'  ],
    [ 'O', 'X',  'O'  ],
]);

// Append our box to the screen.
cli.append(box);


// Quit on Escape, q, or Control-C.
cli.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});

// Render the screen.
cli.render();

const flip = [
    [ 'O', 'O',  'O'  ],
    [ 'X', 'X',  'X'  ],
    [ 'O', 'O',  'O'  ],
];

const flop = [
    [ 'O', 'X',  'O'  ],
    [ 'O', 'X',  'O'  ],
    [ 'O', 'X',  'O'  ],
];

let mode = 'flip';


setInterval(() => {

    let data;

    if('flip' === mode){
        data = flop
        mode = 'flop'
    }
    else if('flop' === mode){
        data = flip
        mode = 'flip'
    }


    cli.title = mode;
    box.setData(data);

    cli.render();

}, 1000);
