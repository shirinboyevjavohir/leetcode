/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function (s) {
  let left = 0,
    rigth = s.length - 1;
  while (left < rigth) {
    [s[left], s[rigth]] = [s[rigth], s[left]];
    left += 1;
    rigth -= 1;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];
let s1 = ["H", "a", "n", "n", "a", "h"];
console.log(reverseString(s));
console.log(reverseString(s1));
// Write a function that reverses a string. The input string is given as an array of characters s.

// !You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
