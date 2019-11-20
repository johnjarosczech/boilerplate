import config from '../config'

import gulp from 'gulp'
import connect from 'gulp-connect'
import open from 'gulp-open'

gulp.task('server', () => {
    connect.server({
        root: config.root.dest,
        livereload: true,
        port: config.tasks.server.port,
    })

    gulp.src(config.root.dest)
        .pipe(open({
            uri: config.tasks.server.uri,
            app: config.tasks.server.app
        }))
})