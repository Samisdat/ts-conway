module.exports = function(grunt){

    var fs = require("fs");
    var lcovSourcemap = require("lcov-sourcemap");

    grunt.task.registerTask('lcov', 'lcov from source_map', function() {

        var done = this.async();

        lcovSourcemap(
            "./coverage/lcov.info", 
            [
                './testing/ts/cell.js.map',
                './testing/ts/frontend.js.map',
                './testing/ts/habitat.js.map',
                './testing/ts/livingcell.js.map',
                './testing/ts/neighbours.js.map',
                './testing/ts/position.js.map',                
                './testing/ts/pattern.js.map'                
            ],
            "./testing/src/", 
            "./"
        ).then(function (lcov) {

            lcov = lcov.replace(/.\/..\/..\/..\/src/g, 'src');

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
