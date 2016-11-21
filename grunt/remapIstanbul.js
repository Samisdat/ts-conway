
module.exports = function(grunt){

    'use strict';

    var remapIstanbul = {
        typescript: {
            src: 'coverage/coverage.json',
            options: {
                reports: {
                    'json': 'coverage/coverage-final.json',
                    'html': 'coverage/'
                }
            }
        }
    };

    grunt.loadNpmTasks('remap-istanbul');

    grunt.registerTask('typescript-remap-reports', 'Remap to ts ', function() {

        grunt.loadNpmTasks('remap-istanbul');

        grunt.config.set('remap-istanbul', remapIstanbul);

        grunt.task.run('remapIstanbul:typescript');



    });

    return remapIstanbul;

};
