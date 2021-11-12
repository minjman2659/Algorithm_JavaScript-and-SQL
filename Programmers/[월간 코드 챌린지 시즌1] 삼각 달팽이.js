// https://programmers.co.kr/learn/courses/30/lessons/68645

function solution(n) {
  const result = [];
  const matrix = new Array(n).fill(0).map((_, idx) => new Array(idx + 1));
  let count = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    // 아래
    for (let i = 0; i < n; i++) {
      matrix[++x][y] = ++count;
    }
    // 오른쪽
    for (let i = 0; i < n - 1; i++) {
      matrix[x][++y] = ++count;
    }
    // 위
    for (let i = 0; i < n - 2; i++) {
      matrix[--x][--y] = ++count;
    }
    n -= 3;
  }

  for (let arr of matrix) {
    result.push(...arr);
  }

  return result;
}
