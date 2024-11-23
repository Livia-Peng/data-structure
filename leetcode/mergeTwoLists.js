/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  const res = new ListNode(0);

  let p1 = list1, p2 = list2;
  let cur = res;

  while (p1 && p2) {
    // console.log("cur:", cur.val, " ", "p1:", p1.val, " ", "p2", p2.val)
    if (p1.val <= p2.val) {
      cur.next = p1;
      p1 = p1.next
    } else {
      cur.next = p2;
      p2 = p2.next
    }
    cur = cur.next
  }
  if (p1) cur.next = p1;
  if (p2) cur.next = p2;

  return res.next
};
