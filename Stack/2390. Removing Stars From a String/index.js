/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  s = s.split("");
  let i = 0;
  let stack = [];
  while (i < s.length) {
    if (s[i] !== "*") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
    i++;
  }

  return stack.join("");
};

let s = "leet**cod*e";
console.log(removeStars(s));
