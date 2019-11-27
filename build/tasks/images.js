import config from '../config'
import notification from '../utils/notifications'
import paths from '../utils/paths'

import gulp from 'gulp'
import comparision from 'dir-compare'
import filter from 'gulp-filter'
import util from 'gulp-util'
import image from 'gulp-image'

let options = {
    notification: {
        title: 'Images Error',
        message: '<%= error.message =>'
    },
    compare: {
        excludeFilter: '.*, sprite.svg'
    }
}

let optimise = () => {
    return gulp
        .src(paths('images').src)
        .pipe(image({
            pngquant: true,
            jpegoptim: true
        }).on('error', notification(options.notification)))
        .pipe(gulp.dest(paths('images').dest))
}

let diff = () => {
    let src = [config.root.src, config.tasks.images.src].join('/'),
        dest = [config.root.dest, config.tasks.images.dest].join('/')

    return comparision
        .compare(src, dest, options.compare)
        .then((result) => {
            if (!result.differencesFiles) {
                return;
            }

            util.log(util.colors.red('Unexpected files in destination directory:'))

            var i = 0

            result.diffSet
                .filter((_diff) => {
                    return _diff.type1 === 'missing'
                })
                .forEach((_diff) => {
                    util.log(util.colors.yellow('[' + i + '] ' + [_diff.path2, _diff.name2].join('/').replace(dest + '/', '')))
                })

            util.log(util.colors.red('Count: ' + i))
        })
}

gulp.task('images.diff', diff)
gulp.task('images', ['images.diff'], optimise)