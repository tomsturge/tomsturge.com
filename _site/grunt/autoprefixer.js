module.exports = {
    options: {
        silent: true, // suppress logging
        map: true, // Use and update the sourcemap
        browsers: ['last 2 versions', '> 1%', 'Explorer 10']
    },

    dist: {
        files: {
            'assets/css/screen.min.css': 'assets/css/screen.css'
        }
    }
}
