module.exports = {

    scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat',
                'uglify']
    },

    css: {
        files: ['assets/**/*.scss'],
        tasks: ['sass',
                'autoprefixer']
    },

    options : {
        spawn : false
    }
}
