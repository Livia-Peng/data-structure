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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let res= false;
    const dfs = (n, sum) => {
        console.log(n.val, sum);
        // 在根节点判断是否匹配
        if (!n.left && !n.right && sum === targetSum) {
            res = true;
        }
        n.left && dfs(n.left, n.left.val + sum)
        n.right && dfs(n.right, n.right.val + sum)
    };
    dfs(n, n.val);
    return res
};
