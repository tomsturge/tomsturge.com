module.exports = {

    // Task options
    options: {
        limit: 4
    },

    preBuild: [
    'uglify',
    'autoprefixer'
    ],

    devBuild: [
    'sass:dev'
    ],

    // Production tasks
    production: [
    'sass:prod'
    ],

    // Image tasks
    imgMin: [
    'imagemin'
    ]
};
