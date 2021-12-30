// https://www.acmicpc.net/problem/1463

function solution(N) {
  const table = [0, 0, 1]; // 각각 0, 1, 2 일때

  for (let i = 3; i <= N; i++) {
    table[i] = table[i - 1] + 1;
    if (i % 2 === 0) {
      table[i] = Math.min(table[i], table[i / 2] + 1);
    }
    if (i % 3 === 0) {
      table[i] = Math.min(table[i], table[i / 3] + 1);
    }
  }

  return table[N];
}
