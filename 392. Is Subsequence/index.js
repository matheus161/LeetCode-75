/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let isPresent = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[isPresent]) {
      isPresent++;
    }
  }
  return isPresent === s.length;
};

let s = "axc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));
