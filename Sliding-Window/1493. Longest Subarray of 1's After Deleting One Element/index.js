/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let count = 0;
  let longest = 0;
  let flip = 1;
  let zeroFoud = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1) {
      count++;
    } else if (nums[j] === 0 && flip != 0) {
      flip--;
      zeroFoud++;
    } else {
      longest = Math.max(count, longest);
      j = start;
      start++;
      count = 0;
      flip = 1;
    }
  }

  longest = Math.max(count, longest);
  return zeroFoud ? longest : longest - 1;
};

let nums = [1, 1, 1];
console.log(longestSubarray(nums));
