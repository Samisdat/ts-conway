
module.exports = function(grunt){

	var exec = {
		nyc: {
   			cmd: './node_modules/.bin/nyc grunt test'
		 },
		 liveTest:{
			 cmd: 'grunt mochaTest:typescript-last-change'
		 }
	};

    return exec;

};
