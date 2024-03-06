/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let inserPosition = 0;

  if (nums.length === 1) {
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[inserPosition++] = nums[i];
    }
  }

  for (let j = inserPosition; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
};

// let nums = [2, 1];
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
