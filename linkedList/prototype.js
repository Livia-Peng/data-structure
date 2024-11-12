/**
 * instanceof 的原理
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
var instanceOf = (a, b) => {
    let p = a;
    while (b && p) {
        if (p.__proto__ === b.prototype) {
            return true
        }
        p = p.__proto__
    }
    return null
}
