module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/css/style-dev.css': 'sass/style-development.sass'
        }
      },
      production: {
        options: {
          style: 'expanded'
        },
        files: {
          'public/css/style-pro.css': 'sass/style-production.sass'
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
      php: {
        files: [
          'public/*.php',
          'public/**/*.php'
        ]
      },
      options: {
        livereload: true,
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
