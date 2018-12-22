var ts = {
	options: {
		sourceMap: true,
		target: 'es5'			
	},
	production: {
		src: ['typescript/**/*.ts'], 
 		outDir: 'dist/javascript/src',
	},
	testing: {
		src: ['typescript/**/*.ts'], 
 		outDir: 'dist/javascript',
	}	
};

module.exports = ts;