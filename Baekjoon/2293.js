// https://www.acmicpc.net/problem/2293

function solution(n, k, money) {
  const canMakeMoney = new Array(k + 1).fill(0);
  canMakeMoney[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < k + 1; j++) {
      if (money[i] <= j) {
        canMakeMoney[j] = canMakeMoney[j] + canMakeMoney[j - money[i]];
      }
    }
  }

  return canMakeMoney[k];
}
