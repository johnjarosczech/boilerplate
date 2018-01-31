import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./build/tasks')

gulp.task('watch', ['styles', 'scripts'], () => {
    gulp.watch('./assets/scss/**/*', ['styles'])
    gulp.watch('./assets/js/**/*', ['scripts'])
})

gulp.task('default', ['styles', 'scripts', 'images'])