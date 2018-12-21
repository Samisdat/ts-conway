var browserify = {
    dist: {
        files: {
            'dist/conway.js': 'typescript/conway.ts'
        },
        options: {
            browserifyOptions: {
                debug: true,
                paths: [
                    'typescript/'
                ]
            },
            watch: true,
            plugin: [
                [
                    'tsify', {
                    project: './tsconfig.json'
                }
                ]
            ]
        }
    }

};

module.exports = browserify;