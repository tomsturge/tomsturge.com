module.exports = {

    // Task options
    options: {
        limit: 4
    },

    preBuild: [
    'uglify'
    //'autoprefixer'
    ],

    devBuild: [
    'sass'
    ],

    // Image tasks
    imgMin: [
    'imagemin'
    ]
};
