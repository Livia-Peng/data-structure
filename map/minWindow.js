/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Map();
    Array.from(t).forEach(w => {
        let count = need.get(w) || 0;
        need.set(w, count + 1);  // 存放每个字符以及需要的数量
    });
    let needType = need.size;  // 用于判断是否所有字符都查找完毕
    let l = 0, r = 0;
    let res = "";
    while (r < s.length) {
        const w = s[r];
        // 判断右指针指向的字符是否是目标字符
        if (need.has(w)) {
            need.set(w, need.get(w) - 1);  // 查得一次，减少字符所需数量
            if (need.get(w) === 0) {  // 某字符已查询完毕
                needType -= 1;
            }
        }
        // 已获得所有字符，将左指针右移缩短字符长度
        while (needType === 0) {
            // 存储当前最短字符串
            const temp = s.slice(l, r + 1);
            console.log(temp);
            if (!res || temp.length < res.length) res = temp;
            // 判断左指针指向的字符是否是目标字符
            const w2 = s[l];
            if (need.has(w2)) {
                console.log({ w2, need: need.get(w2) , needType})
                need.set(w2, need.get(w2) + 1);  // 将移走，所属数量需恢复
                if (need.get(w2) === 1) {
                    needType += 1
                }
            }
            // 左指针右移
            l += 1;
        }
        // 左指针移动完毕后，右指针继续移动
        r += 1
    }
    return res
};
