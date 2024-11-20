const bt = require('./data/bt.js');

const postorder1 = (root) => {
    if (!root) return;
    postorder1(root.left);
    postorder1(root.right);
    console.log(root.val);
}

const postorder2 = (root) => {
    if (!root) return;
    const res = [];
    let p = root;
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();  // 后进先出
        res.push(n);  // 使用中间栈将先序换成后序
        n.left && stack.push(n.left);  // 需后出
        n.right && stack.push(n.right);
    }
    while(res.length) {
        const n = res.pop();
        console.log(n.val);
    }
}

/*
4 5 2 6 7 3 1
*/
// postorder1(bt)
postorder2(bt)
