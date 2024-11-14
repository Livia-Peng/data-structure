const tree = require('./tree.js');

// 深度优先遍历 depth-first
const dfs = (root) => {
    if (!root) return;
    console.log(root.val);
    root.children.forEach(dfs);
};

dfs(tree)
