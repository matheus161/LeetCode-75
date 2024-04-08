/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let actualSum = 0;

  // Check for the next window
  // If the one is leaving is a vowel decrease one
  // else, if the one ir arriving is a vowel increase one
  for (let j = 0; j < s.length; j++) {
    if (vowels.includes(s[j])) actualSum++;
    if (vowels.includes(s[j - k])) actualSum--;
    vowelsCount = Math.max(vowelsCount, actualSum);
    if (vowelsCount === k) return vowelsCount;
    console.log(s[j - k], s[j], actualSum);
  }
  return vowelsCount;
};

let s = "leetcode";
let k = 3;

console.log(maxVowels(s, k));
