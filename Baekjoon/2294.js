// https://www.acmicpc.net/problem/2294

function solution(n, k, money) {
  money.sort((a, b) => a - b);
  const moneyCount = new Array(k + 1).fill(100001); // 우선 가장 큰 수를 모든 요소에 넣어준다.
  moneyCount[0] = 0; // 최소의 동전 개수로 0을 만드는 방법은 아예 사용하지 않는 것.

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < k + 1; j++) {
      if (money[i] <= j) {
        // j 인덱스의 동전 가치를 만드는 최소 동전 개수는
        // : 현재 동전 가치를 뺏을 때 남은 동전 가치를 만들 수 있는 최소 동전개수와, i를 돌면서 채워진 최소 동전 개수 중 최소 값이 들어간다.
        moneyCount[j] = Math.min(moneyCount[j - money[i]] + 1, moneyCount[j]);
      }
    }
  }

  return moneyCount[k] === 100001 ? -1 : moneyCount[k];
}
