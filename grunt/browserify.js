var browserify = {
  dist: {
    files: {
      'dist/conway.js': 'dist/javascript/conway.js'
    },
    options: {
    	require: ['jquery']
    }
  }
};

module.exports = browserify;