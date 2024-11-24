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
 * @return {boolean}
 */
var isSymmetric1 = function (root) {
    const rec = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val === q.val && rec(p.left, q.right) && rec(p.right, q.left)
    }
    return rec(root.left, root.right);
};

// 迭代
var isSymmetric2 = function (root) {
    const queue = [root.left, root.right];
    while(queue.length) {
        let p = queue.shift();
        let q = queue.shift();
        if (!p && !q) continue;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;

        queue.push(p.left);
        queue.push(q.right);

        queue.push(p.right);
        queue.push(q.left);
    }
    return true;
};
