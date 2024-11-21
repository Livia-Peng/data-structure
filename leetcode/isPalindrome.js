/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome1 = function (head) {
    if (head && !head.next) return true;
    const arr = [];
    let p = head;
    while (p) {
        arr.push(p.val);
        p = p.next
    }
    let leftIdx = 0, rightIdx = arr.length - 1;
    while (leftIdx < rightIdx) {
        if (arr[leftIdx] !== arr[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true
};

var isPalindrome2 = function (head) {
    if (head && !head.next) return true;
    let leftP = head;
    const rec = (curP) => {
        if (curP) {
            if (!rec(curP.next)) {
                return false
            }
            if (curP.val !== leftP.val) {
                return false
            }
            leftP = leftP.next
        }
    }
    return rec(head)
};
