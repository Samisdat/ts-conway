var copy = {
  html: {
    files: [
      // includes files within path
      {expand: false, src: ['src/index.html'], dest: 'dist/index.html', filter: 'isFile'}
    ],
  },
    fontawesome_css: {
        expand: true,
        src: 'src/font-awesome/css/**',
        dest: 'dist/font-awesome/css/',
        flatten: true,
        filter: 'isFile'
    },  
    fontawesome_font: {
        expand: true,
        src: 'src/font-awesome/fonts/**',
        dest: 'dist/font-awesome/fonts/',
        flatten: true,
        filter: 'isFile'
    },  
};

module.exports = copy;