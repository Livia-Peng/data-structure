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
 * @return {number[]}
 */
var inorderTraversal1 = function (root) {
    const res = [];
    const inorder = (n) => {
        if (!n) return;
        inorder(n.left);
        console.log(n.val);
        res.push(n.val)
        inorder(n.right);
    };
    inorder(root);
    return res
};

var inorderTraversal2 = function (root) {
    const res = [];
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        res.push(n.val)
        p = n.right;
    }
    return res
};
