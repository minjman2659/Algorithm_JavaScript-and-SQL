// https://programmers.co.kr/learn/courses/30/lessons/12913#qna

function solution(land) {
  const landLeng = land.length;
  const dp = new Array(landLeng).fill(0).map((el) => new Array(4));
  for (let i = 0; i < 4; i++) {
    dp[landLeng - 1][i] = land[landLeng - 1][i];
  }
  // 아래부터 거꾸로 올라가는 것이 핵심
  for (let j = landLeng - 2; j >= 0; j--) {
    dp[j][0] = Math.max(dp[j + 1][1], dp[j + 1][2], dp[j + 1][3]) + land[j][0];
    dp[j][1] = Math.max(dp[j + 1][0], dp[j + 1][2], dp[j + 1][3]) + land[j][1];
    dp[j][2] = Math.max(dp[j + 1][0], dp[j + 1][1], dp[j + 1][3]) + land[j][2];
    dp[j][3] = Math.max(dp[j + 1][0], dp[j + 1][1], dp[j + 1][2]) + land[j][3];
  }

  return Math.max(...dp[0]);
}
