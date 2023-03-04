// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === needle) return 0;
  if (haystack.length <= needle.length) return -1;

  let result = [];
  haystack.split("").forEach((s, index) => {
    if (s === needle[0]) {
      let isMatch = true;
      for (let i = 1; i < needle.length; i++) {
        if (haystack[index + i] !== needle[i]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) result.push(index);
    }
  });

  return result.length ? result[0] : -1;
};
