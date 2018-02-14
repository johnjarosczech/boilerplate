function animate(node, prop, end, duration, fn, arg, context) {
    var stepTime = 20;
    var startTime = new Date().getTime();
    var start = parseInt(getComputedStyle(node).getPropertyValue(prop), 10);
    if (typeof end === "string") {
        end = parseInt(end, 10);
    }

    function step() {
        // calc how much time has elapsed
        var nextValue, done, portionComplete;
        var timeRunning = new Date().getTime() - startTime;
        if (timeRunning >= duration) {
            nextValue = end;
            done = true;
        } else {
            portionComplete = timeRunning / duration;
            nextValue = ((end - start) * portionComplete) + start;
            done = false;
        }
        // set the next value
        node.style[prop] = nextValue + "px";
        if (!done) {
            setTimeout(step, stepTime);
        } else {
            context = context || window;
            fn.call(context, node, arg);
        }
    }
    // start the animation
    step();
}