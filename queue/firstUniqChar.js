/**
 * 字符串中的第一个唯一字符
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length === 1) return 0;
    const queue = s.split('');
    return queue.findIndex((v, idx1) => {
        return queue.every((w, idx2) => w !== v || idx1 === idx2)
    })
};

const a = firstUniqChar('leet');
console.log(a)