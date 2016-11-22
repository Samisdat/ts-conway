
var check_coverage = {
    default: {
        options: {
            coverageFolder: 'coverage*', // will check both coverage folders and merge the coverage results
            check: {
                statements: 95,
                branches: 95,
                functions: 95,
                lines: 95                
            }                    	
        }
    }
};

module.exports = check_coverage;
