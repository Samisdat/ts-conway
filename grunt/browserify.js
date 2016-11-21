var browserify = {
  dist: {
    files: {
      'dist/conway.js': 'dist/javascript/src/conway.js'
    },
    options: {
    	require: ['jquery']
    }
  }
};

module.exports = browserify;