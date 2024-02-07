/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let word2Index = 0;
  let mergeString = "";
  // Merge the two words
  for (let index = 0; index < word1.length; index++) {
    mergeString += word1[index];
    // Treat if word2 is lower than word1
    if (word2Index < word2.length) {
      mergeString += word2[word2Index];
    }

    word2Index++;
  }

  // Still having letter (word2 bigger than word1)
  if (word2Index <= word2.length) {
    mergeString += word2.substring(word2Index);
  }

  return mergeString;
};

console.log(mergeAlternately("abcd", "pq"));
