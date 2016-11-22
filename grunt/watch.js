module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var watch = {
        development: {
            files: [
                'src/**/*.html',
                'typescript/**/*.ts',
            ],
            tasks: [
                'copy:html',
                'copy:fontawesome_css',
                'copy:fontawesome_font',
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
