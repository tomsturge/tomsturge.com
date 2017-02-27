module.exports = {

    // Task options
    options: {
        limit: 4
    },

    preBuild: [
    'concat',
    'uglify'
    ],

    devBuild: [
    'sass'
    ],

    prodBuild: [
    'autoprefixer'
    ],

    // Image tasks
    imgMin: [
    'imagemin'
    ]
};
