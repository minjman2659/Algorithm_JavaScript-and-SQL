// https://www.acmicpc.net/problem/11660

function solution(length, map, x1, y1, x2, y2) {
  const prefixSum = new Array(length + 1)
    .fill(0)
    .map((el) => new Array(length + 1).fill(0));
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      prefixSum[i][j] =
        prefixSum[i - 1][j] +
        prefixSum[i][j - 1] -
        prefixSum[i - 1][j - 1] +
        map[i - 1][j - 1];
    }
  }

  const result =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];

  return result;
}

const length = 4;
const map = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];
