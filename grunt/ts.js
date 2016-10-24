var ts = {
	production: {
		src: ['lib/**/*.ts'], 
 		outDir: 'javascript/lib',
	},
	testing: {
		src: ['tests/**/*.ts'], 
 		outDir: 'javascript/testing',
	}	
};

module.exports = ts;