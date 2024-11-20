const graph = require('./data.js');


// 深度优先遍历 depth-first
const bfs = (st) => {
    const set = new Set();
    set.add(st);
    const stack = [st];
    while (stack.length) {
        const n = stack.shift();
        console.log(n);
        graph[n] && graph[n].forEach(nx => {
            if (!set.has(nx)) {
                stack.push(nx)
                set.add(nx);
            }
        });
    }
}

bfs(2)
