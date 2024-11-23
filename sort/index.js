// 冒泡排序
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp
            }
        }
    }
}

// 选择排序
Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < this.length; j++) {
            if (this[minIdx] > this[j]) {
                minIdx = j
            }
        }
        if (minIdx === i) continue;
        const temp = this[minIdx];
        this[minIdx] = this[i];
        this[i] = temp
    }
}

/* 插入排序
*  从第二位开始，反向向前比较和交换
*/
Array.prototype.insertionSort = function () {
    // 从第二个数开始往前比较
    for (let i = 1; i < this.length; i++) {
        for (let j = i; j > 0; j--) {
            if (this[j - 1] > this[j]) {
                let temp = this[j - 1];
                this[j - 1] = this[j];
                this[j] = temp
            } else {
                break;  // 再往前已排好序，可跳出循环
            }
        }
    }
}

/* 插入排序
*  递归拆分数组，直至数组为单个数字，并在递归中对拆分的数组进行合并(合并的同时进行排序)
*/
Array.prototype.mergeSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) return arr;
        const midIdx = Math.floor(arr.length / 2);
        const left = rec(arr.slice(0, midIdx));
        const right = rec(arr.slice(midIdx, arr.length));
        const res = [];
        // 循环方式为数组头部出队
        while (left.length || right.length) {
            // 都有值时需比较大小
            if (left.length && right.length) {
                res.push(left[0] < right[0] ? left.shift() : right.shift())
            } else if (left.length) {
                res.push(left.shift())
            } else if (right.length) {
                res.push(right.shift())
            }
        }
        return res
    };
    const res = rec(this);
    res.forEach((ele, idx) => this[idx] = ele);  // 保留数组的引用关系
}

/* 快速排序
*  分区：从数组中任意选一个基准数，将比基准大和比基准小的分开放；递归分区
*/
Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) return arr;
        const left = [];
        const right = [];
        const basic = arr[0];  // 取第一个数作为基准
        for (let i = 1; i < arr.length; i++) {
            arr[i] < basic ? left.push(arr[i]) : right.push(arr[i])
        }
        return [...rec(left), basic, ...rec(right)]
    };
    const res = rec(this);
    res.forEach((ele, idx) => this[idx] = ele);  // 保留数组的引用关系
}

const arr = [5, 3, 6, 7, 2, 4];
arr.quickSort();
console.log(arr.join(','))
