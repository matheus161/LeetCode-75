var longestOnes = function (nums, k) {
  let start = 0;
  let count = 0;
  let longest = 0;
  let flip = k;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1) {
      count++;
    } else if (nums[j] === 0 && flip != 0) {
      count++;
      flip--;
    } else {
      longest = Math.max(count, longest);
      j = start;
      start++;
      count = 0;
      flip = k;
    }
  }
  longest = Math.max(count, longest);
  return longest;
};

let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
let k = 3;

console.log(longestOnes(nums, k));
