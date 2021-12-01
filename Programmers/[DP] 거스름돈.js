// https://programmers.co.kr/learn/courses/30/lessons/12907

function solution(n, money) {
  const coins = new Array(n + 1).fill(0);
  coins[0] = 1;

  for (let i = 0; i < money.length; i++) {
    for (let j = 1; j < coins.length; j++) {
      if (money[i] <= j) {
        coins[j] += coins[j - money[i]] % 1000000007;
      }
    }
  }

  return coins[n];
}
