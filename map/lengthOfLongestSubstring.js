/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    let length = 1;
    const map = new Map();
    let l = 0;
    for (let r = 0; r < s.length; r += 1) {
        const w = s[r];
        if (map.has(w) && map.get(w) >= l) {
            l = map.get(w) + 1
        }
        length = Math.max(length, r - l + 1);
        map.set(w, r)
    }
    return length
};
