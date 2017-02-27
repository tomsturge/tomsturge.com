module.exports = {
    compress: {
        options: {
            style: 'compressed',
            sourcemap: 'none'
        },
        files: {
            'assets/css/screen.css': 'assets/_sass/screen.scss'
        }
    }
}
