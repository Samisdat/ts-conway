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
        }
    };

    return mocha;

};
