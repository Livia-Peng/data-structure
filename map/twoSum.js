/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (map.has(target - num)) {
            return [map.get(target - num), i]
        } else {
            map.set(num, i)
        }
    }
    return []
};