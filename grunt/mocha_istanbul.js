
var mochaIstanbul = {
    coverage: {
        src: [
            'javascript/testing/**/*.js'
        ],
        options:{
			reportFormats: ['json', 'lcov']        	
        }

    }
};

module.exports = mochaIstanbul;
