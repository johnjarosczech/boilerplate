import util from 'gulp-util'

let config = {
    production: !!util.env.production,

    /*
    * Root assets of project
    * * * * * * */
    root: {
        src: './assets',
        dest: './public'
    },

    /*
     * Tasks settings
     * * * * * * */
    tasks: {
        styles: {
            src: 'scss',
            dest: 'css',
            sass: {
                includePaths: [
                    'node_modules'
                ]
            },
            plugins: {
                rename: {
                    basename: 'app',
                    suffix: '.min'
                }
            },
            extensions: [
                '*'
            ]
        },
        scripts: {
            src: 'js',
            dest: 'js',
            entries: [
                './assets/js/utils/*.js',
                './assets/js/controls/slider.js',
                './assets/js/containers/tabs.js',
                './assets/js/containers/modal.js',
                './assets/js/navigation/hamburger.js',
                './assets/js/main.js'
            ],
            plugins: {
                rename: {
                    basename: 'app',
                    suffix: '.min'
                }
            },
            extensions: [
                '*'
            ]
        },
        images: {
            src: 'images',
            dest: 'images',
            extensions: [
                '*'
            ]
        }
    },
}

export default config