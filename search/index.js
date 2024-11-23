// 二分搜索
Array.prototype.binarySearch = function (val) {
    let low = 0;
    let high = this.length - 1;
    while (low <= high) {
        const midIdx = Math.floor((low + high) / 2);
        const curVal = this[midIdx];
        if (val < curVal) {
            high = midIdx - 1
        } else if (val > curVal) {
            low = midIdx + 1
        } else {
            return midIdx
        }
    }
    return -1;
}

const arr = [2, 3, 4, 5, 6, 7];
console.log(arr.binarySearch(8))
