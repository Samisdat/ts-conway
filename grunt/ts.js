var ts = {
	production: {
		options: {
			sourceMap: false,
   			target: 'es5'			
		},
		src: ['src/**/*.ts'], 
 		outDir: 'dist/javascript',
	},
	testing: {
		src: ['tests/**/*.ts'], 
 		outDir: 'javascript/testing',
	}	
};

module.exports = ts;