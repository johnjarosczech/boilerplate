import gulp from 'gulp'
import requireDir from 'require-dir'
import connect from 'gulp-connect'

requireDir('./build/tasks')

global.__basedir = __dirname;

gulp.task('html', () => {
    return gulp.src('public/**/*.html').pipe(connect.reload())
});

gulp.task('watch', ['styles', 'scripts', 'server'], () => {
    gulp.watch('assets/scss/**/*', ['styles'])
    gulp.watch('assets/js/**/*', ['scripts'])
    gulp.watch('public/**/*.html', ['html'])
    gulp.watch('assets/images/**/*', ['images'])
    gulp.watch('assets/icons/**/*', ['svg'])
})

gulp.task('default', ['styles', 'scripts', 'images', 'svg', 'zip'])