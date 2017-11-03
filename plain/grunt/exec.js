
module.exports = function(grunt){

	
	var exec = {
  		echo: {
   			cmd: 'echo "hallo"'
 		},
		nyc: {
   			cmd: './node_modules/.bin/nyc grunt test'
 		}
	};

    return exec;

};
