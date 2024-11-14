const bt = require('./bt.js');

const inorder1 = (root) => {
    if (!root) return;
    inorder1(root.left);
    console.log(root.val);
    inorder1(root.right);
}

const inorder2 = (root) => {
    if (!root) return;
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();  // 栈顶的左节点 || 中间节点
        console.log(n.val);
        p = n.right;  // 继续遍历栈顶节点的右节点
    }
}

/*
4 2 5 1 6 3 7
*/
// inorder1(bt)
inorder2(bt)
