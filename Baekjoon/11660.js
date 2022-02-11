// https://www.acmicpc.net/problem/11660
// 구간합 알고리즘

function solution(N, M, matrix, rowColGroup) {
  // rowColGroup은 (x1, y1) ~ (x2, y2)이 담긴 배열
  const result = [];

  for (let arr of rowColGroup) {
    const [x1, y1, x2, y2] = arr;
    let sum = 0;

    for (let x = x1 - 1; x < x2; x++) {
      let tempSum = 0;
      for (let y = y1 - 1; y < y2; y++) {
        tempSum += matrix[x][y];
      }
      sum += tempSum;
    }
    result.push(sum);
  }

  return result;
}
