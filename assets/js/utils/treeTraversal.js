/**
 * Finds all elements on page that match the selector
 * Returns a nodelist array
 * 
 * @param {*} selector 
 * @param {*} context 
 */
const findAll = (selector, context = document) => {
    return context.querySelectorAll(selector)
}