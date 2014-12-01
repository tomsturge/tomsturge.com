module.exports = {

    scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat',
        'uglify']
    },

    css: {
        files: ['assets/**/*.scss',
        'assets/css/screen.css'],
        tasks: ['sass',
        'autoprefixer']
    },
    
    options : {
        spawn : false
    }
}
