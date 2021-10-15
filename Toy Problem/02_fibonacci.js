// https://urclass.codestates.com/codeproblem/089a3ba2-c65e-44a8-b832-03335c21fef9

// 기존 피보나치 수열 구하기 함수 ( 시간복잡도 : O(2^n) )
function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

// DP - Memoiztion : Top-Down 방식의 함수 ( 시간복잡도 : O(n) )
function fibonacci(n) {
  let memo = [0, 1];

  const memoization = (num) => {
    if (memo[num] !== undefined) {
      return memo[num];
    } else {
      memo[num] = memoization(num - 2) + memoization(num - 1);
      return memo[num];
    }
  };

  return memoization(n);
}

// DP - Tabulation : Bottom-Up 방식의 함수 ( 시간복잡도 : O(n) )
function fibonacci(n) {
  let memo = [0, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }

  return memo[n];
}
