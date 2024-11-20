const graph = require('./data.js');

const set = new Set();

// 深度优先遍历 depth-first
const dfs = (n) => {
    console.log(n);
    set.add(n);
    graph[n] && graph[n].forEach(nx => {
        !set.has(nx) && dfs(nx)
    });
}

dfs(0)
