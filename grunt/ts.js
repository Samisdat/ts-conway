var ts = {
	production: {
		options: {
			sourceMap: false,
   			target: 'es5'			
		},
		src: ['lib/**/*.ts'], 
 		outDir: 'dist/javascript/lib',
	},
	testing: {
		src: ['tests/**/*.ts'], 
 		outDir: 'javascript/testing',
	}	
};

module.exports = ts;