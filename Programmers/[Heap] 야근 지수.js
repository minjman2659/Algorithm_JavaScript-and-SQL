// https://programmers.co.kr/learn/courses/30/lessons/12927

function solution(n, works) {
  // 최대 힙 문제!
  // 왜냐면 최댓값에 계속 -1을 해 나가면 되는 문제이기 때문!
  const copied = [...works].sort((a, b) => b - a);
  let max = copied[0];

  while (n > 0) {
    for (let i = 0; i < copied.length; i++) {
      if (max === copied[i]) {
        copied[i] -= copied[i] > 0 ? 1 : 0;
        n--;
      }
      if (n === 0) break;
    }
    max--;
    if (max === 0) break;
  }

  return copied.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}
