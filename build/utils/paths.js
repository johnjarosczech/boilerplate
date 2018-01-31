import config from '../config'
import path from 'path'

var src = (task, glob) => {
    return path.join(
        config.root.src,
        config.tasks[task].src,
        glob + '.+(' + config.tasks[task].extensions.join('|') + ')'
    )
}

var paths = (task) => {
    return {
        src: src(task, ['/**/*']),
        dest: path.join(
            config.root.dest,
            config.tasks[task].dest
        ),
        entries: () => {
            return config.tasks.scripts.entries
        }
    }
}

export default paths