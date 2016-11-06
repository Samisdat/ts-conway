module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var watch = {
        development: {
            files: [
                'src/**/*.html',
                'src/**/*.ts',
            ],
            tasks: [
                'copy:html',
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
