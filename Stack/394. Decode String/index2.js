/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let strStack = [];
  let currNum = 0;
  let currStr = "";

  for (const char of s) {
    if (!isNaN(char)) {
      currNum = currNum * 10 + parseInt(char); // Constrói o número de vários dígitos
    } else if (char !== "]") {
      strStack.push(char);
    } else {
      while (true) {
        let strPeek = strStack.pop();
        if (strPeek === "[") break;
        else currStr = strPeek + currStr;
      }

      let blockStr = "";
      for (let j = 0; j < currNum; j++) {
        blockStr += currStr;
      }

      currNum = 0; // Reseta o número atual
      currStr = ""; // Reseta a string atual
      strStack.push(blockStr);
    }
  }

  return strStack.join("");
};

// let s = "3[a]2[bc]";
// let s = "3[a2[c]]";
let s = "2[abc]3[cd]ef";
// let s = "100[leetcode]";
// let s = "9[le]";
console.log(decodeString(s));
