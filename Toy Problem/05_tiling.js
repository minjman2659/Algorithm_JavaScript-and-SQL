// https://urclass.codestates.com/codeproblem/c53e45aa-095e-4742-967d-d22cb1ba9d6b

let tiling = function (n) {
    // n의 가짓수를 구할 때, n-2는 가로 두개를 / n-1은 세로 한개를 두면 n의 가짓수가 구해진다.
    // n = (n-2) + (n-1)
    // 피보나치 수열과 유사하다.
  
    const memo = [0, 1, 2];
  
    const memoization = (num) => {
      if(memo[num] !== undefined) {
        return memo[num];
      } else {
        memo[num] = memoization(num-2) + memoization(num-1);
        return memo[num];
      }
    }
  
    return memoization(n);
  };
  