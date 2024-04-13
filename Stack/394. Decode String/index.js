/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currNum = 0;
  let currStr = "";

  for (let char of s) {
    if (char === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (char === "]") {
      let num = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(num);
    } else if (!isNaN(char)) {
      currNum = currNum * 10 + parseInt(char);
    } else {
      currStr += char;
    }
  }

  return currStr;
};

// let s = "3[a]2[bc]";
// let s = "3[a2[c]]";
// let s = "2[abc]3[cd]ef";
// let s = "100[leetcode]";
let s = "100[le]";
console.log(decodeString(s));
