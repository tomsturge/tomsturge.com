module.exports = {

    // Task options
    options: {
        limit: 4
    },

    preBuild: [
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
