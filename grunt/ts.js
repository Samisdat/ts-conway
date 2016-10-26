var ts = {
	production: {
		options: {
			sourceMap: false
		},
		src: ['lib/**/*.ts'], 
 		outDir: 'javascript/lib',
	},
	testing: {
		src: ['tests/**/*.ts'], 
 		outDir: 'javascript/testing',
	}	
};

module.exports = ts;