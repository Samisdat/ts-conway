module.exports = function (grunt) {

    var tslint = {
        options: {
            // can be a configuration object or a filepath to tslint.json 
            configuration: "tslint.json",
            // If set to true, tslint errors will be reported, but not fail the task 
            // If set to false, tslint errors will be reported, and the task will fail 
            force: false,
            format: 'stylish',
            fix: false
        },
        files: {
            src: [
                "typescript/**/*.ts"
            ]
        }
    };

    const fix = grunt.option('fix');
    if (true === fix) {
        tslint.options.fix = true;
    }

    return tslint;

};
