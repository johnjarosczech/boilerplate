/**
 * Returning i alone means that it is available outside of the function if needed
 *  
 * @param {*} array 
 * @param {*} func 
 */
const each = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        func(array[i], i)
    }
}