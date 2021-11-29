// https://programmers.co.kr/learn/courses/30/lessons/12981#qna

function solution(n, words) {
  let num = 0;
  let count = 1;
  let sameCheck = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (i % n === 0) count++;
    if (sameCheck.includes(words[i])) {
      num = (i % n) + 1;
      break;
    }
    if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
      num = (i % n) + 1;
      break;
    }
    sameCheck.push(words[i]);
  }

  if (num === 0) return [0, 0];
  return [num, count];
}
