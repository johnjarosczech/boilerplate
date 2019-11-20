import config from '../config'
import paths from '../utils/paths'

import gulp from 'gulp'
import svgmin from 'gulp-svgmin'
import svgSprite from 'gulp-svg-sprite'

let task = () => {
    return gulp
        .src(paths('svg').src)
        .pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '',
                    sprite: "sprite.svg",
                    render: {
                        scss: {
                            dest:'../../assets/scss/elements/_icons.scss',
                            template: 'assets/scss/elements/_icons_template.scss'
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(paths('svg').dest))
}

gulp.task('svg', task)