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
// 数组存储 ************************************************************************

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

// 递归执行栈 ************************************************************************

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

// 快慢指针 ************************************************************************

const findMiddleListNode = (head) => {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}

const reverseListNode = (head) => {
    let cur = head;
    let res = null;
    while (cur) {
        const temp = cur.next;
        cur.next = res;
        res = cur;
        cur = temp
    }
    return res
}

var isPalindrome3 = function (head) {
    const midP = findMiddleListNode(head);
    const reverseHead = reverseListNode(midP);
    let p1 = head, p2 = reverseHead;
    while (p1 && p2) {
        if (p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next
    }
    return true
};
