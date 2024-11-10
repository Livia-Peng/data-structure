/**
 * 获取十进制整数的反码对应的十进制
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    if (n === 0) return 1;
    let multiplier = n;
    const stack = [];
    while (multiplier > 0) {
        stack.push(multiplier % 2);
        multiplier = Math.floor(multiplier / 2)
    }
    let num = 0;
    const map = { '0': 1, '1': 0 };
    while (stack.length) {
        const n = map[stack.pop()];
        num += n * Math.pow(2, stack.length)
    }
    return num
};
