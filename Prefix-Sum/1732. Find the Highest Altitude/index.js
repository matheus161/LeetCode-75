/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highestAltitude = 0;
  let actualCount = 0;

  for (const altitude of gain) {
    actualCount += altitude;
    highestAltitude = Math.max(actualCount, highestAltitude);
  }

  return highestAltitude;
};

let gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
