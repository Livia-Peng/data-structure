/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    let res = 0;
    const stack = [root];
    while (stack.length) {
        const n = stack.shift();  // 先进先出
        res++
        if (!n.left && !n.right) break;
        n.left && stack.push(n.left);
        n.right && stack.push(n.right);
    }
    return res;
};
