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
var minDepth = function (root) {
    if (!root) return 0;
    const stack = [[root, 1]];
    while (stack.length) {
        const [n, level] = stack.shift();
        if (!n.left && !n.right) {
            return level
        }
        n.left && stack.push([n.left, level + 1]);
        n.right && stack.push([n.right, level + 1]);
    }
};
