// https://www.acmicpc.net/problem/10819
// 완전탐색
function solution(N, arr) {
  let result = 0;

  const problem = (arr) => {
    let problemResult = 0;
    for (let i = 2; i <= N; i++) {
      problemResult += Math.abs(arr[i - 2] - arr[i - 1]);
    }
    return problemResult;
  };

  const getPermutation = (arr, num) => {
    let getPerResult = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.filter((_, index) => idx !== index);
      let comb = getPermutation(rest, num - 1);
      let attached = comb.map((el) => [fixed, ...el]);
      getPerResult.push(...attached);
    });
    return getPerResult;
  };

  const permutation = getPermutation(arr, N);
  for (let i = 0; i < permutation.length; i++) {
    result = Math.max(result, problem(permutation[i]));
  }

  return result;
}
