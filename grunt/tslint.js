var tslint = {
    options: {
        // can be a configuration object or a filepath to tslint.json 
        configuration: "tslint.json",
        // If set to true, tslint errors will be reported, but not fail the task 
        // If set to false, tslint errors will be reported, and the task will fail 
        force: false,
        format: 'stylish'
    },
    files: {
        src: [
            "typescript/**/*.ts"
        ]
    }
};

module.exports = tslint;