var fs = require('fs');

module.exports = function (grunt) {

    'use strict';

    var mocha = {
        options: {
            quiet: false,
            require: [
                'ts-node/register',
                'tsconfig-paths/register'
            ]
        },
        'typescript': {
            src: [
                './typescript/**/*.test.ts'
            ]
        },
        'typescript-last-change': {
            src: [

            ]
        }
    };

    let lastChange = fs.readFileSync('./last-change.txt', { encoding: 'utf8' });

    lastChange = lastChange.replace('.test', '');
    lastChange = lastChange.replace('.ts', '.test.ts');

    mocha["typescript-last-change"].src = lastChange;

    /**
     * Write last changed file into last-change.txt
     */
    grunt.event.on('watch', function (action, filepath) {

        fs.writeFileSync('./last-change.txt', filepath, { encoding: 'utf8' });

        grunt.task.run('exec:liveTest');

    });

    return mocha;

};
