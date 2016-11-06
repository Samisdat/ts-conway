var ts = {
	production: {
		options: {
			sourceMap: false,
   			target: 'es5'			
		},
		src: ['src/ts/**/*.ts'], 
 		outDir: 'dist/javascript',
	},
	testing: {
		src: ['src/tests/**/*.ts'], 
 		outDir: 'testing',
	}	
};

module.exports = ts;