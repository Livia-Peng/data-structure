const tree = require('./tree.js');

// 深度优先遍历 depth-first
const dfs = (root, depth = 0) => {
    if (!root) return;
    console.log(root.val, depth);
    root.children.forEach(c => dfs(c, depth + 1));
};

dfs(tree)
