const tree = require('./data/tree.js');

// 深度优先遍历 depth-first
const dfs = (root, floor = 0) => {
    if (!root) return;
    console.log(root.val, floor);
    root.children.forEach(c => dfs(c, floor + 1));
};

dfs(tree)
