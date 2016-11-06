
var mochaIstanbul = {
    coverage: {
        src: [
            'testing/**/*.js'
        ],
        options:{
			reportFormats: ['json', 'lcov']        	
        }

    }
};

module.exports = mochaIstanbul;
