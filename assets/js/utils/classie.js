/*
 * Classie
 * --------------------------------------------------------------
 * Class helper functions. Why use? For pretty and readable code.
 * 
 * Usage:
 * ------
 * 
 * addClass(elem, 'my-new-class')
 * removeClass(elem, 'my-unwanted-class')
 * hasClass(elem, 'my-class') -> true/false
 * toggleClass(elem, 'my-class')
 */

const addClass = (elem, c) => {
    elem.classList.add(c)
}

const removeClass = (elem, c) => {
    elem.classList.remove(c)
}

const hasClass = (elem, c) => {
    return elem.classList.contains(c)
}

const toggleClass = (elem, c) => {
    var fn = hasClass( elem, c ) ? removeClass : addClass
    fn(elem, c)
}

