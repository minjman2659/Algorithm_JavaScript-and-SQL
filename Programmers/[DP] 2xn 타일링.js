// https://programmers.co.kr/learn/courses/30/lessons/12900#qna

function solution(n) {
  // n의 가짓수를 구할 때, n-2는 가로 두개를 / n-1은 세로 한개를 두면 n의 가짓수가 구해진다.
  // n = (n-2) + (n-1)
  // 피보나치 수열과 유사하다.

  // Bottom-Up 방식 - 통과
  const table = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    table[i] = (table[i - 2] + table[i - 1]) % 1000000007;
  }
  return table[n];

  // Top-Down 방식 - 시간 초과 _ Why...?
  // const memo = [0, 1, 2];
  // const memoization = (num) => {
  //     if(memo[num]) {
  //         return memo[num];
  //     } else {
  //         memo[num] = (memoization(num-2) + memoization(num-1)) % 1000000007;
  //         return memo[num];
  //     }
  // }
  // return memoization(n);
}
