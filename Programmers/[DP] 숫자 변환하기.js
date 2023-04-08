// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  if (x === y) return 0;
  // 모든 경우의 수를 Infinity로 두고 변환에 걸린 수를 입력
  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;
  // * 로 가는 것보다 원 값을 / 로 가는 경우가 효율적
  for (let i = x + 1; i < y + 1; i++) {
    if (x <= i - n) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && x <= i / 2) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && x <= i / 3) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}
