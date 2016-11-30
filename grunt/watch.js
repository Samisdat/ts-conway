module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var watch = {
        development: {
            files: [
                'src/**/*.html',
                'dist/javascript/src/**/*.js',
            ],
            tasks: [
                'copy:html',
                'copy:fontawesome_css',
                'copy:fontawesome_font',
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
