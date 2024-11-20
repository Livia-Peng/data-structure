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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const res = [];
    // const stack = [[root, 0]];
    // while (stack.length) {
    //     const [n, level] = stack.shift();
    //     console.log(n.val, level);
    //     if (res[level]) {
    //         res[level].push(n.val)
    //     } else {
    //         res[level] = [n.val]
    //     }
    //     n.left && stack.push([n.left, level + 1]);
    //     n.right && stack.push([n.right, level + 1]);
    // }
    const stack = [root];
    while (stack.length) {
        let len = stack.length;
        res.push([]);
        while (len--) {
            const n = stack.shift();
            console.log(n.val);
            res[res.length - 1].push(n.val);
            n.left && stack.push(n.left);
            n.right && stack.push(n.right);
        }
    }
    return res
};

const bt = require('./data/bt.js');
levelOrder(bt)
