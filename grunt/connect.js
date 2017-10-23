module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var connect = {
        dist: {
            options: {
                port: 80,
                hostname: '0.0.0.0',
                keepalive: false,
                base: 'dist',
                livereload: true,
                protocol: 'http',
            }
        }
    };

    return connect;
};
