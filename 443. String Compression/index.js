/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let writeIndex = 0;
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
      count++;
    } else {
      chars[writeIndex++] = chars[i];
      if (count > 1) {
        let countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
          chars[writeIndex++] = countStr[j];
        }
      }
      count = 1;
    }
  }

  return writeIndex;
};

// let chars = ["a", "a", "a", "b", "b", "a", "a"];
let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));
