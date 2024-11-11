/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0);
    let list1 = l1;
    let list2 = l2;
    let p = list;
    let overSum = 0;
    while (list1 || list2) {
        const val1 = list1 ? list1.val : 0;
        const val2 = list2 ? list2.val : 0;
        const sum = val1 + val2 + overSum;
        p.next = new ListNode(sum % 10);
        overSum = Math.floor(sum / 10);
        if (list1) list1 = list1.next;
        if (list2) list2 = list2.next;
        p = p.next;
    }
    if (overSum) {
        p.next = new ListNode(overSum)
    }
    return list.next
};