
module.exports = function(grunt){

	var exec = {
		nyc: {
   			cmd: './node_modules/.bin/nyc grunt test'
		 }
	};

    return exec;

};
