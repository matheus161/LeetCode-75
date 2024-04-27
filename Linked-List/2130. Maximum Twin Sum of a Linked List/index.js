// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let curr = head;
  let arr = [];

  // Traverse the linked list and store its values in an array
  while (curr != null) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let sum = 0;
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    // Compute the sum of each pair and update the maximum sum
    sum = Math.max(sum, arr[i] + arr[n - 1 - i]);
  }

  return sum;
};

// Create the linked list from the array
let head = new ListNode(5);
head.next = new ListNode(4);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(pairSum(head)); // Output the maximum twin sum
