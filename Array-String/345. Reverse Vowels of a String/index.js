/**
 * @param {string} s
 * @return {string}
 */

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

var reverseVowels = function (s) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let stringArr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (vowels.includes(stringArr[left]) && vowels.includes(stringArr[right])) {
      let aux = stringArr[left];
      stringArr[left] = stringArr[right];
      stringArr[right] = aux;
      left++;
      right--;
    } else if (vowels.includes(stringArr[left])) {
      right--;
    } else if (vowels.includes(stringArr[right])) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return stringArr.join("");
};

var reverseVowels2 = function (s) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let stringsVowelsArr = [];
  let size = s.length;

  for (let index = 0; index < size; index++) {
    if (vowels.includes(s[index])) {
      stringsVowelsArr.push(s[index]);
    }
  }

  let stringArr = s.split("");
  for (let index = 0; index < size; index++) {
    if (vowels.includes(s[index])) {
      stringArr[index] = stringsVowelsArr.pop();
    }
  }

  return stringArr.join("");
};

console.log(reverseVowels2("leetcode"));
