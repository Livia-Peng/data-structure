/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head && head.next) {
        if (head.next.val === head.val) {
            return deleteDuplicates(head.next);
        } else {
            head.next = deleteDuplicates(head.next);
            return head
        }
    }
    return head
};