/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums[0];
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let actualSum = maxSum;

  for (let j = k; j < nums.length; j++) {
    actualSum += nums[j] - nums[j - k];
    if (actualSum > maxSum) maxSum = actualSum;
  }

  let maxAverage = maxSum / k;
  return maxAverage.toFixed(5);
};

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;

console.log(findMaxAverage(nums, k));
