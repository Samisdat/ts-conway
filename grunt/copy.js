var copy = {
  html: {
    files: [
      // includes files within path
      {expand: false, src: ['src/index.html'], dest: 'dist/index.html', filter: 'isFile'},
    ],
  },
};

module.exports = copy;