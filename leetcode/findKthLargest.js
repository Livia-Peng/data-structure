/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const rec = function (arr, n) {
        const basic = arr[Math.floor(Math.random() * arr.length)];
        const left = [];  // 放大数
        const right = [];  // 放小数
        const equal = [];  // 相等数
        arr.forEach(ele => {
            if (ele === basic) {
                equal.push(ele);
                return
            }
            ele < basic ? right.push(ele) : left.push(ele)
        });
        console.log(n, left, equal, right)
        // 在较大数列表中
        if (left.length >= n) {
            return rec(left, n)
        }
        // 在相等列表中
        if ((left.length + equal.length) >= n) {
            return basic
        }
        // 在较小数列表中
        return rec(right, n - left.length - equal.length)
    };
    return rec(nums, k)
};
