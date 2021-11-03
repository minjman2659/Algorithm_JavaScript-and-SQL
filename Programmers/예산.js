// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let result = 0;
  let num = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    num += d[i];
    result++;
    if (num > budget) {
      num -= d[i];
      result--;
      continue;
    } else if (num === budget) {
      return result;
    }
  }

  return result;
}
