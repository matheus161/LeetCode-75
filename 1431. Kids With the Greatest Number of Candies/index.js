/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // Find the biggest possible number of candies
  let biggestNumOfCandies = candies[0];
  candies.forEach((item) => {
    if (item > biggestNumOfCandies) biggestNumOfCandies = item;
  });

  // Check for each element if the actual + extracandies
  // is bigger than biggestNumOfCandies
  let result = [];
  candies.forEach((item) => {
    if (item + extraCandies >= biggestNumOfCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  });

  return result;
};

var kidsWithCandies2 = function (candies, extraCandies) {
  let maxCandies = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= maxCandies);
};

console.log(kidsWithCandies([12, 1, 12], 10));
