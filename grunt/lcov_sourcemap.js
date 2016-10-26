module.exports = function(grunt){

    var lcovSourcemap = require("lcov-sourcemap");

    grunt.task.registerTask('lcov', 'lcov from source_map', function() {

        var done = this.async();
        console.log('lcov')

        lcovSourcemap.writeLcov(
            "./coverage/lcov.info", 
            [
                './javascript/testing/lib/cell.js.map',
                './javascript/testing/lib/frontend.js.map',
                './javascript/testing/lib/habitat.js.map',
                './javascript/testing/lib/livingcell.js.map',
                './javascript/testing/lib/neighbours.js.map',
                './javascript/testing/lib/position.js.map'                
            ],
            "./javascript/testing/lib/", 
            "./coverage/lcov-mapped.info"
        ).then(function () {
            done();
        });

    });
};
