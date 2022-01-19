// https://www.acmicpc.net/problem/11053

function solution(N, A) {
  let memo = [0, 0];

  for (let i = 0; i < N; i++) {
    if (A[i] > memo[0]) {
      memo[0] = A[i];
      memo[1]++;
    }
  }

  return memo[1];
}
