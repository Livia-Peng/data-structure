// 最小堆
class MinHeap {
    constructor() {
        this.heap = []
    }

    _getParentIdx(idx) {
        return (idx - 1) >> 1  // Math.floor((idx - 1)/2)
    }

    _getLeftIdx(idx) {
        return idx * 2 + 1
    }

    _getRightIdx(idx) {
        return idx * 2 + 2
    }

    _swap(idx1, idx2) {
        const temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }

    _shiftUp(idx) {
        if (idx === 0) return;
        const pIdx = this._getParentIdx(idx);
        if (this.heap[pIdx] && this.heap[pIdx].val > this.heap[idx].val) {
            this._swap(pIdx, idx);
            this._shiftUp(pIdx)
        }
    }

    _shiftDown(idx) {
        [this._getLeftIdx(idx), this._getRightIdx(idx)].forEach(tIdx => {
            if (this.heap[idx].val > (this.heap[tIdx] && this.heap[tIdx].val)) {
                this._swap(tIdx, idx);
                this._shiftDown(tIdx)
            }
        });
    }

    insert(doc) {
        this.heap.push(doc);
        this._shiftUp(this.heap.length - 1)
    }

    pop() {
        if (this.size() === 1) return this.heap.shift();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._shiftDown(0)
        return top
    }

    peek() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
    const h = new MinHeap();
    lists.forEach(node => {
        let p = node;
        while (p) {
            h.insert(p);
            p = p.next
        }
    });
    let head = new ListNode(0);
    let p = head;
    while (h.size() > 0) {
        p.next = h.pop();
        p = p.next;
    }
    return head.next
};

var mergeKLists2 = function (lists) {
    const h = new MinHeap();
    lists.forEach(node => {
        if(node) h.insert(node)
    });
    let head = new ListNode(0);
    let p = head;
    while (h.size() > 0) {
        const n = h.pop();
        n.next && h.insert(n.next);
        p.next = n;
        p = p.next;
    }
    return head.next
};
