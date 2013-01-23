'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*test.js']
    },
    strip : {
      main : {
        src : 'test/fixtures/src/all_api_methods.js',
        dest : 'test/fixtures/src/all_api_methods.built.js',
        nodes : ['iog','console']
      },
      all : {
        files : ['test/fixtures/foo/**/*.built.js'],
        inline : true,
        nodes : ['iog','console']
      }
    },
    jshint: {
      options : {
        jshintrc : './.jshintrc'
      },
      all : ['Gruntfile.js', 'tasks/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', ['jshint','nodeunit']);

};
