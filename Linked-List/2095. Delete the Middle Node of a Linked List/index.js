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
var deleteMiddle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let curr = head;
  let count = 0;
  while (curr != null) {
    curr = curr.next;
    count++;
  }

  let middle = (count - 1) / 2;
  curr = head;
  let prev = null;
  for (let i = 0; i < middle; i++) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = curr.next;

  return head;
};
