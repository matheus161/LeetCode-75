/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;
  let moves = 0;
  let sortedArr = nums.sort((a, b) => a - b);

  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];
    if (sum === k) {
      moves++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return moves;
};

let nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
let k = 2;

console.log(maxOperations(nums, k));
