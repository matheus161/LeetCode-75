/**
 * @param {number[]} arr
 * @return {boolean}
 */
let set = {};
function addToSet(element) {
  if (!Object.prototype.hasOwnProperty.call(set, element)) {
    set[element] = element;
    return true;
  }
  return false;
}

var uniqueOccurrences = function (arr) {
  let map = {};
  arr.forEach((element) => {
    if (map[element] == null) {
      map[element] = 1;
    } else {
      map[element]++;
    }
  });

  let count = Object.values(map);
  // count.forEach((element) => {
  //   addToSet(element);
  // });

  // return count.length === Object.keys(set).length;
  return count.length === new Set(count).size;
};

let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
