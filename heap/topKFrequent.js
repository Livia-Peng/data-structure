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
        if (this.heap[pIdx] && this.heap[pIdx].value > this.heap[idx].value) {
            this._swap(pIdx, idx);
            this._shiftUp(pIdx)
        }
    }

    _shiftDown(idx) {
        [this._getLeftIdx(idx), this._getRightIdx(idx)].forEach(tIdx => {
            if (this.heap[idx].value > (this.heap[tIdx] && this.heap[tIdx].value)) {
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
        this.heap[0] = this.heap.pop();
        this._shiftDown(0)
    }

    peek() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1))
    // console.log(map)
    const h = new MinHeap();
    for (let [key, value] of map) {
        h.insert({ key, value });
        if (h.size() > k) {
            h.pop()
        }
    }
    return h.heap.map(e => e.key)
};

// const rs = topKFrequent([4,1,-1,2,-1,2,3], 2)
