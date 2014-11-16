module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'assets/js/libs/*.js', // All JS in the libs folder
                    'assets/js/global.js'  // This specific file
                ],
                dest: 'assets/js/init.js',
            }
        },

        uglify: {
            build: {
                src: 'assets/js/init.js',
                dest: 'assets/js/init.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/images/'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'auto'
                },
                files: {
                    'assets/css/screen.css': 'assets/sass/screen.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                files: {
                    'assets/css/screen.css': 'assets/css/screen.css'
                }
            }
        },

        watch: {
            files: ['assets/js/*.js',
                    'assets/**/*.scss',
                    'assets/css/screen.css' ],
            tasks: ['concat',
                    'uglify',
                    'sass',
                    'autoprefixer',
                    'shell:jekyllServe' ],
            options : {
                spawn : false,
                interrupt : true,
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('deploy', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer']);

};