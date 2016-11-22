
var mochaIstanbul = {
    coverage: {
        src: [
            'dist/javascript/tests/**/*.js'
        ],
        options:{
			reportFormats: ['json']
        }
    }
};

//node_modules\.bin\istanbul report --include=coverage\typescript\coverage-final.json text-summary

module.exports = mochaIstanbul;
