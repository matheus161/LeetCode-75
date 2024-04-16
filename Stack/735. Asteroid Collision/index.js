/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (stack.length === 0 || asteroids[i] > 0) {
      stack.push(asteroids[i]);
    } else {
      while (true) {
        // First case, different directions
        let peek = stack[stack.length - 1];
        // [-5, -4] -4
        if (peek < 0) {
          stack.push(asteroids[i]);
          break;
        } else if (peek === -asteroids[i]) {
          // [-5, 4] -4
          stack.pop();
          break;
        } else if (peek > -asteroids[i]) {
          // [-5, -4, 5] -4
          break;
        } else {
          // [-5, 4, 3, 2, 1] -4
          stack.pop();
          if (stack.length === 0) {
            // bigger then anyone
            stack.push(asteroids[i]);
            break;
          }
        }
      }
    }
  }

  return stack;
};
// let asteroids = [10, 2, -5];
// let asteroids = [-2, -1, 1, 2];
// let asteroids = [8, -8];
let asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids));
