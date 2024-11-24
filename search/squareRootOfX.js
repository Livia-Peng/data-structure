// 二分查找
/**
 * @param {number} x
 * @return {number}
 */
var squareRootOfX = function (x) {
    let high = x;
    while (low <= high) {
        const midNum = Math.floor((low + high) / 2);
        if (midNum > x / midNum) {
            high = midNum - 1
        } else {
            low = midNum + 1
        }
        // console.log(low, midNum, high)
    }
    return high
};
