// https://www.acmicpc.net/problem/11053

function solution(N, A) {
  let max = [0, 0];

  for (let i = 0; i < N; i++) {
    if (A[i] > max[0]) {
      max[0] = A[i];
      max[1]++;
    }
  }

  return max[1];
}
