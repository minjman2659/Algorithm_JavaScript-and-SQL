// https://programmers.co.kr/learn/courses/30/lessons/12904#qna

function solution(s) {
  if (s.length < 2 || s === s.split('').reverse().join('')) {
    return s.length;
  }

  const checkExpand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right).length;
  };

  let result = 1;
  for (let i = 0; i < s.length - 2; i++) {
    result = Math.max(result, checkExpand(i, i + 1), checkExpand(i, i + 2));
  }

  return result;
}
