/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = [],
    posfix = [],
    output = [];
  let size = nums.length;
  prefix[0] = 1;
  posfix[size - 1] = 1;

  for (let i = 1; i < size; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }

  for (let i = size - 2; i >= 0; i--) {
    posfix[i] = nums[i + 1] * posfix[i + 1];
  }

  for (let j = 0; j < size; j++) {
    let left = j - 1 >= 0 ? prefix[j] : 1;
    let right = j + 1 < size ? posfix[j] : 1;
    output[j] = left * right;
  }

  return output;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
