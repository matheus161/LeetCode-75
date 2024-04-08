/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let index = 0; index < flowerbed.length; index++) {
    if (
      flowerbed[index] !== 1 &&
      (index === 0 || flowerbed[index - 1] === 0) &&
      (index === flowerbed.length - 1 || flowerbed[index + 1] === 0)
    ) {
      n--;
      flowerbed[index] = 1;
    }
  }

  return n <= 0;
};

let flowerbed = [0, 0, 1, 0, 1];
console.log(canPlaceFlowers(flowerbed, 1));
