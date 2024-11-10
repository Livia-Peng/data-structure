/**
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s.length) return true;
    // 奇数长度
    if (s.length % 2 === 1) return false;
    const map = {
        "}": "{",
        "]": "[",
        ")": "(",
    };
    const stack = [];
    for (let i = 0; i < s.length; i += 1) {
        const c = s[i];
        switch (c) {
            case "{":
            case "[":
            case "(":
                stack.push(c);
                break
            case "}":
            case "]":
            case ")":
                // 出栈的同时比对
                if (stack.pop() !== map[c]) {
                    return false
                }
                break;
            default:
                // 非合法字符
                return false
        }
    }
    return stack.length === 0
}
