const MinHeap = require('./MinHeap.js');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const h = new MinHeap();
    nums.forEach(num => {
        h.insert(num)
        if (h.size() > k) {
            h.pop()
        }
    });
    return h.peek()
};
