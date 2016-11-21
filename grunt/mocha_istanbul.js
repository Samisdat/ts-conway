
var mochaIstanbul = {
    coverage: {
        src: [
            'dist/javascript/tests/**/*.js'
        ],
        options:{
			reportFormats: ['json', 'html'],
            check: {
                statements: 100,
                branches: 100,
                functions: 100,
                lines: 100                
            }                    	
        }
    }
};

module.exports = mochaIstanbul;
