/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph1 = function (node) {
    if (!node) return;
    const map = new Map();
    const dfs = (n) => {
        console.log(n.val);
        const nc = new Node(n.val);
        map.set(n, nc);
        n.neighbors && n.neighbors.forEach(nx => {
            !map.has(nx) && dfs(nx);
            nc.neighbors.push(map.get(nx));
            map.set(n, nc);
        });
    };
    dfs(node);
    return map.get(node)
};

var cloneGraph2 = function (node) {
    if (!node) return;
    const map = new Map();
    map.set(node, new Node(node.val));
    const stack = [node];
    while (stack.length) {
        const n = stack.shift();
        console.log(n.val);
        const nc = map.get(nc);
        n.neighbors && n.neighbors.forEach(nx => {
            if (!map.has(nx)) {
                stack.push(nx)
                map.set(nx, new Node(nx.val));
            }
            nc.neighbors.push(map.get(nx));
            map.set(n, nc);
        });
    }
    return map.get(node)
};
