// https://programmers.co.kr/learn/courses/30/lessons/12914

function solution(n) {
  // f(n) = f(n-1) + f(n-2)

  // Bottom-Up 방식
  const table = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    table[i] = (table[i - 1] + table[i - 2]) % 1234567;
  }
  return table[n] % 1234567;

  // Top-Down 방식
  const memo = [0, 1, 2];
  const memoization = (num) => {
    if (memo[num]) {
      return memo[num];
    } else {
      memo[num] = (memoization(num - 1) + memoization(num - 2)) % 1234567;
      return memo[num];
    }
  };
  return memoization(n) % 1234567;
}
