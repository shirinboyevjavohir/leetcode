const reverseVowels = function (s) {
  const characters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  s = s.split("");
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (characters.includes(s[i])) {
      if (characters.includes(s[j])) {
        [s[i], s[j]] = [s[j], s[i]];
        i += 1;
        j -= 1;
      } else {
        j -= 1;
      }
    } else {
      i += 1;
    }
  }
  return s.join("");
};
const s = "hallOe";
console.log(reverseVowels(s));
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.
