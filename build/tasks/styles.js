import config from '../config'
import notification from '../utils/notifications'
import paths from '../utils/paths'

import gulp from 'gulp'
import sass from 'gulp-sass'
import rename from 'gulp-rename'
import notify from 'gulp-notify'
import minifycss from 'gulp-minify-css'
import plubmer from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import util from 'gulp-util'

let options = {
    notification: {
        title: 'Sass error',
        subtitle: '<%= error.relativePath %>:<%= error.line %>',
        message: '<%= error.messageOriginal %>',
        open: 'file://<%= error.file %>'
    }
}

let task = () => {
    return gulp
        .src(paths('styles').src)
        .pipe(plubmer())
        .pipe(sourcemaps.init())
        .pipe(sass(config.tasks.styles.sass).on('error', notification(options.notification)))
        .pipe(rename({
            basename: config.tasks.styles.plugins.rename.basename,
            suffix: config.tasks.styles.plugins.rename.suffix
        }))
        .pipe(autoprefixer())
        .pipe(config.production ? minifycss() : util.noop())
        .pipe(!config.production ? sourcemaps.write() : util.noop())
        .pipe(gulp.dest(paths('styles').dest))
        .pipe(notify('Styles task complete'))
}

gulp.task('styles', task)