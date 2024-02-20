/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

//Computes gcd(m, n) by Euclid’s algorithm
//Input: Two nonnegative, not-both-zero integers m and n
//Output: Greatest common divisor of m and n
function gdcByEuclid(m, n) {
  let r;
  while (n !== 0) {
    r = m % n;
    m = n;
    n = r;
  }
  return m;
}

var gcdOfStrings = function (str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  const gcd = gdcByEuclid(len1, len2);

  const substring = str1.substring(0, gcd);

  if (str1.includes(substring) && str2.includes(substring)) return substring;

  return "";
};

var gcdOfStrings2 = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = gdcByEuclid(str1.length, str2.length);
  return str1.substring(0, gcd);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
