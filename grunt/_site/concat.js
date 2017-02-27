module.exports = {
    prod: {
        nonull: true,
        dest: 'assets/js/global.js',
        src: [
            'bower_components/loader.js/loader.js',
            'bower_components/jquery/jquery.js',
            'bower_components/moment/moment.js',
            'bower_components/keymaster/keymaster.js',
            'bower_components/fastclick/lib/fastclick.js',

            'assets/js/app.js'
        ]
    }
}
