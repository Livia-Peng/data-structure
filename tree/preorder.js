const bt = require('./data/bt.js');

const preorder1 = (root) => {
    if (!root) return;
    console.log(root.val);
    preorder1(root.left);
    preorder1(root.right);
}

const preorder2 = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) { 
        const n = stack.pop();  // 先进后出
        console.log(n.val);
        n.right && stack.push(n.right);  // 后出
        n.left && stack.push(n.left);
    }
}

/*
1 2 4 5 3 6 7
*/
// preorder1(bt)
preorder2(bt)
