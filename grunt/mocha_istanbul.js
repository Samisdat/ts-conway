
var mochaIstanbul = {
    coverage: {
        src: [
            'dist/javascript/tests/**/*.js'
        ],
        options:{
			reportFormats: ['json', 'html']
        }
    }
};

module.exports = mochaIstanbul;
