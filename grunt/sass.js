module.exports = {
    dev: {
        dist: {
            options: {
                style: 'nested',
                sourcemap: true
            },
            files: {
                'assets/css/screen.css': 'assets/sass/screen.scss'
            }
        }
    },

    prod: {
        dist: {
            options: {
                style: 'compressed',
                sourcemap: false
            },
            files: {
                'assets/css/screen.css': 'assets/sass/screen.scss'
            }
        }
    }
}
