module.exports = function(grunt) { // eslint-disable-line no-unused-vars

    'use strict';

    var connect = {
        dist: {
            options: {
                port: 4444,
                hostname: '127.0.0.1',
                keepalive: false,
                base: 'dist',
                livereload: true,
                protocol: 'http',
            }
        }
    };

    return connect;
};
