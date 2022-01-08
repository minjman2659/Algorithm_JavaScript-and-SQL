// https://www.acmicpc.net/problem/2193

// 메모이제이션 (Top-Down)
function solution1(N) {
  const memo = [0, 1, 1]; // 각각 0,1,2 일 경우

  const memoization = (n) => {
    if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = memoization(n - 1) + memoization(n - 2);
      return memo[n];
    }
  };

  return memoization(N);
}

// 테이뷸레이션 (Bottom-Up)
function solution2(N) {
  const table = [0, 1, 1];

  for (let n = 3; n <= N; n++) {
    table[n] = table[n - 1] + table[n - 2];
  }

  return table[N];
}
