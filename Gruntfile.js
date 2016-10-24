module.exports = function(grunt) {

    'use strict';

	grunt.loadNpmTasks('remap-istanbul');

    require('time-grunt')(grunt);

    require('load-grunt-tasks')(grunt, {pattern: [
        'grunt-*',
        '@*/grunt-*',
        'gruntify-eslint*'
    ]});

    require('load-grunt-config')(grunt);

};
