module.exports = function(grunt){

    var fs = require("fs");
    var lcovSourcemap = require("lcov-sourcemap");

    grunt.task.registerTask('lcov', 'lcov from source_map', function() {

        var done = this.async();

        var sourcemaps = grunt.file.expand('./testing/ts/**.map');

        lcovSourcemap(
            "./coverage/lcov.info", 
            sourcemaps,
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
