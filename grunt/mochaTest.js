var path = require('path');

var mocha = {
    options: {
        reporter: 'spec',
        quiet: false, // Optionally suppress output to standard out (defaults to false)
        clearRequireCache: true // Optionally clear the require cache before running tests (defaults to false)
    },
    'typescript': {
        src: [
            'tests/*.js'
        ]
    }
};

module.exports = function(grunt){

    'use strict';
    /*
    grunt.event.on('watch', function(action, filepath){


    });
    */
    return mocha;

};
