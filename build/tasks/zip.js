import config from '../config'

import gulp from 'gulp'
import zip from 'gulp-zip'
import path from 'path'

let task = () => {
    gulp.src(config.tasks.zip.src)
        .pipe(zip(path.basename(__basedir) + '.zip'))
        .pipe(gulp.dest(config.tasks.zip.dest))
}

gulp.task('zip', task)