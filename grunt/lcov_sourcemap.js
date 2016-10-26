module.exports = function(grunt){

    var fs = require("fs");
    var lcovSourcemap = require("lcov-sourcemap");

    grunt.task.registerTask('lcov', 'lcov from source_map', function() {

        var done = this.async();

        lcovSourcemap(
            "./coverage/lcov.info", 
            [
                'javascript/testing/lib/cell.js.map',
                'javascript/testing/lib/frontend.js.map',
                'javascript/testing/lib/habitat.js.map',
                'javascript/testing/lib/livingcell.js.map',
                'javascript/testing/lib/neighbours.js.map',
                'javascript/testing/lib/position.js.map'                
            ],
            "./javascript/testing/lib/", 
            "./"
        ).then(function (lcov) {

            lcov = lcov.replace(/.\/..\/..\/..\/lib/g, 'lib');

            fs.writeFile('coverage/lcov-mapped.info', lcov, function(err) {
                if (err) {
                    throw err;
                }

                console.log('It\'s saved!');
                done();
            });
            

            //done();
        });

    });
};
