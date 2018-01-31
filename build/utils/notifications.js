import notify from 'gulp-notify'

let notification = (opts) => {
    return notify.onError({
        title: opts.title,
        subtitle: opts.subtitle,
        message: opts.message,
        open: opts.open,
        onLast: true
    })
}

export default notification;