// https://www.acmicpc.net/problem/11660
// 구간합 알고리즘

function solution(N, M, matrix, rowColGroup) {
  // rowColGroup은 (x1, y1) ~ (x2, y2)이 담긴 배열
  for (let arr of rowColGroup) {
    const copiedMatrix = [...matrix];
    const [x1, y1, x2, y2] = arr;
    sumMatrix[x1][y1] += matrix[x1][y1];
  }
}
