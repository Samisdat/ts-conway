var path = require('path');

var mocha = {
    options: {
	    quiet: false,
		require: "ts-node/register"
	},
    'typescript': {
        src: [
            './typescript/tests/**/*.ts'
        ]
    },
    'typescript-last-change': {
        src: [
            
        ]
    }    
};

var fs = require('fs');

module.exports = function(grunt){

    'use strict';

    let lastChange = fs.readFileSync('./last-change.txt', {encoding:'utf8'});

    mocha["typescript-last-change"].src = lastChange;


    /**
     * Write last changed file into last-change.txt
     */
    grunt.event.on('watch', function(action, filepath){

        fs.writeFileSync('./last-change.txt', filepath, {encoding:'utf8'});

        grunt.task.run('exec:liveTest');

    });

    return mocha;

};
