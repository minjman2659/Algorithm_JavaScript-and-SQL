// https://www.acmicpc.net/problem/10815

function solution(N, cardN, M, cardM) {
  const result = [];
  cardN.sort((a, b) => a - b);

  const binarySearch = (low, target, high) => {
    while (high > low) {
      let mid = Math.floor((low + high) / 2);

      if (target === cardN[low]) return 1;
      if (target === cardN[high]) return 1;
      if (target === cardN[mid]) return 1;

      if (target > cardN[mid]) {
        low = mid + 1;
      } else if (target < cardN[mid]) {
        high = mid - 1;
      }
    }
    return 0;
  };

  for (let i = 0; i < M; i++) {
    result.push(binarySearch(0, cardM[i], N - 1));
  }

  return result;
}
