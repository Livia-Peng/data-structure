/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // const set = new Set(nums2);
    return [...new Set(nums1)].filter(w => nums2.includes(w))
};
