module.exports = {
    compress: {
        options: {
            style: 'compressed',
            sourcemap: 'none'
        },
        files: {
            'assets/css/screen.css': 'assets/sass/screen.scss'
        }
    }
}
