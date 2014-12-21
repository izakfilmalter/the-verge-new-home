module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'src/style.css': 'sass/style-development.sass'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        map: true,
      },
      your_target: {
        src: 'src/style.css',
        dest: 'public/css/pre.css'
      },
    },

    cssc: {
      csscFirstSet: {
        options: {
          consolidateViaDeclarations: true,
          consolidateViaSelectors: true,
          consolidateMediaQueries: true,
          sort: true
        },
        files: {
          'public/css/style.css' : 'public/css/pre.css'
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
        tasks: ['sass', 'autoprefixer']
      },
      php: {
        files: [
          'public/*.php',
          'public/**/*.php',
          'public/**/**/*.php'
        ]
      },
      options: {
        livereload: true,
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-cssc');

  grunt.registerTask('default', ['watch']);

};
