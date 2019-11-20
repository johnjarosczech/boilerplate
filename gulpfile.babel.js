import gulp from 'gulp'
import requireDir from 'require-dir'
import connect from 'gulp-connect'

requireDir('./build/tasks')

gulp.task('html', () => {
    return gulp.src('public/**/*.html').pipe(connect.reload())
});

gulp.task('watch', ['styles', 'scripts', 'server'], () => {
    gulp.watch('./assets/scss/**/*', ['styles'])
    gulp.watch('./assets/js/**/*', ['scripts'])
    gulp.watch('./public/**/*.html', ['html'])
})

gulp.task('default', ['styles', 'scripts', 'images', 'svg'])