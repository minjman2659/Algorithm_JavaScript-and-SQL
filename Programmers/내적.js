// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}
