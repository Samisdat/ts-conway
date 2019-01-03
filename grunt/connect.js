module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var connect = {
        dist: {
            options: {
                port: 80,
                keepalive: false,
                base: 'dist',
                hostname: '0.0.0.0',
                livereload: 35729,
                protocol: 'http',
            }
        }
    };

    return connect;
};
