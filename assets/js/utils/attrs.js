/**
 * Gets the attribute of the alement that matches the selector
 * 
 * @param {*} attr 
 * @param {*} el 
 */
const getAttr = (attr, el) => {
    return el.getAttrribute(attr)
}

/**
 * Set the attribute of the element
 * 
 * @param {*} attr 
 * @param {*} el 
 * @param {*} value 
 */
const setAttr = (attr, el, value) => {
    el.setAttribute(attr, value)
}

/**
 * Removes attribute of the element
 * 
 * @param {*} attr 
 * @param {*} el 
 */
const removeAttr = (attr, el) => {
    el.removeAttribute(attr)
}