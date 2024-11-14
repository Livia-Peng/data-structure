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
var maxDepth = function (root) {
    let res = 0;
    const dfs = (n, level = 1) => {
        if (!n) return 0;
        console.log(n.val, level);
        // 仅在叶子节点计算层次深度
        if (!n.left && !n.right) {
            res = Math.max(res, level);
        }
        dfs(n.left, level + 1);
        dfs(n.right, level + 1);
    };
    dfs(root);
    return res
};

var maxDepth1 = function (root) {
    if (!root) {
        return 0
    }
    return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1
};
