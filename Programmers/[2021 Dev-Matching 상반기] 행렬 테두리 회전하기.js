// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const result = [];
  const matrix = new Array(rows)
    .fill(0)
    .map((el) => new Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = columns * i + j + 1;
    }
  }

  for (let query of queries) {
    let [x1, y1, x2, y2] = query.map((el) => el - 1);
    const queue = [];
    for (let i = 0; i < y2 - y1; i++) queue.push(matrix[x1][y1 + i]);
    for (let i = 0; i < x2 - x1; i++) queue.push(matrix[x1 + i][y2]);
    for (let i = 0; i < y2 - y1; i++) queue.push(matrix[x2][y2 - i]);
    for (let i = 0; i < x2 - x1; i++) queue.push(matrix[x2 - i][y1]);

    queue.unshift(queue.pop());
    result.push(Math.min(...queue));

    for (let i = 0; i < y2 - y1; i++) matrix[x1][y1 + i] = queue.shift();
    for (let i = 0; i < x2 - x1; i++) matrix[x1 + i][y2] = queue.shift();
    for (let i = 0; i < y2 - y1; i++) matrix[x2][y2 - i] = queue.shift();
    for (let i = 0; i < x2 - x1; i++) matrix[x2 - i][y1] = queue.shift();
  }

  return result;
}
