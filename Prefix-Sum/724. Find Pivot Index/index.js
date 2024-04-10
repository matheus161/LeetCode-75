/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let totalSum = 0;

  // O(n)
  for (let j = 0; j < nums.length; j++) {
    totalSum += nums[j];
  }

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - nums[i] - leftSum;
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }

  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
