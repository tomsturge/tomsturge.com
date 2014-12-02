module.exports = {

    scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat',
                'uglify']
    },

    css: {
        files: ['assets/**/*.scss'],
        tasks: ['autoprefixer',
                'sass']
    },

    options : {
        spawn : false
    }
}
