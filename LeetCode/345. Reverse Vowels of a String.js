// https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      stack.push(s[i]);
    }
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      result = result + stack.pop();
    } else {
      result = result + s[i];
    }
  }

  return result;
};
