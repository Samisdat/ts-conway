var ts = {
	default : {
		options: {
        	sourceMap: true,
	        fast: 'never'
      	},		
		files: [{ 
			src: ['typescript/**/*.ts'], 
			dest: 'javascript' 
		}]
	}
};

module.exports = ts;