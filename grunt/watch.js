module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var watch = {
        development: {
            files: [
                'dist/**/*.html',
                'lib/**/*.ts',
            ],
            tasks: [
                'ts:production',
                'browserify'
            ],
            options: {
                nospawn: true,
                livereload: true
            }
        }
    };

    return watch;

};
