module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/css/style-dev.css': 'sass/style-development.sass'
        }
      },
      production: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/css/style-pro.css': 'sass/style-production.sass'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: grunt.option('port') || 8000,
          hostname: "localhost",
          base: 'www',
        }
      }
    },

    watch: {
      sass: {
        files: [
          'sass/*.sass',
          'sass/**/*.sass',
          'sass/**/**/*.sass',
          'sass/**/**/**/*.sass',
          'sass/**/**/**/**/*.sass',
          'sass/*.scss',
          'sass/**/*.scss',
          'sass/**/**/*.scss',
          'sass/**/**/**/*.scss',
          'sass/**/**/**/**/*.scss',
        ],
        tasks: ['sass']
      },
      html: {
        files: ['www/*.html']
      },
      options: {
        livereload: true,
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect','watch']);

};
