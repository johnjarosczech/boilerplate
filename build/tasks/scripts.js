import config from '../config'
import paths from '../utils/paths'

import gulp from 'gulp'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import rename from 'gulp-rename'
import notify from 'gulp-notify'
import util from 'gulp-util'
import babel from 'gulp-babel'

let options = {
    notification: {
        title: 'JavaScript Error',
        subtitle: [
            '<%= options.relative(options.cwd, error.fileName) %>',
            '<%= error.lineNumber %>',
        ].join(':'),
        message: '<%= error.message %>',
        open: 'file://<%= error.fileName %>',
    }
}

let task = () => {
    return gulp
        .src(paths('scripts').entries())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(rename({
            basename: config.tasks.scripts.plugins.rename.basename,
            suffix: config.tasks.scripts.plugins.rename.suffix
        }))
        .pipe(config.production ? uglify() : util.noop())
        .pipe(gulp.dest(paths('scripts').dest))
        .pipe(notify('Styles task complete'))
}

gulp.task('scripts', task)