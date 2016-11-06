var browserify = {
  dist: {
    files: {
      'dist/conway.js': 'dist/javascript/lib/conway.js'
    },
    options: {
    	require: []
    }
  }
};

module.exports = browserify;