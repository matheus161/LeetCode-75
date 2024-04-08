/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Split the string into an array of words
  let words = s.trim().split(/\s+/);

  // Reverse the arraasy of wo rds
  let reversedWords = words.reverse();

  // Join the reversed array with a single space
  return reversedWords.join(" ");
};

console.log(reverseWords("a good   example"));
