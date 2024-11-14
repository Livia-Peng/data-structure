const tree = require('./tree.js');

// 广度优先遍历 breadth-first
const bfs = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
        const n = stack.shift();  // 先进先出
        console.log(n.val);
        n.children.forEach(c => stack.push(c));
    }
};

bfs(tree)
