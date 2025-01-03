/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const map = new Map();
    nums1.forEach(n => map.set(n, true));
    const arr = [];
    nums2.forEach(n => {
        if (map.get(n)) {
            arr.push(n);
            map.delete(n)
        }
    });
    return arr
};
