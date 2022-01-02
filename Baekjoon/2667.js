// https://www.acmicpc.net/problem/2667

function solution(N, matrix) {
  const homes = [];
  let count = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const checkBoundary = (x, y) => {
    if (x >= 0 && x < N && y >= 0 && y < N) {
      return true;
    } else {
      return false;
    }
  };

  const bfs = (node) => {
    const queue = [node];
    while (queue.length > 0) {
      let [x, y] = queue.shift();
      if (checkBoundary(x, y) && matrix[x][y] === 1) {
        matrix[x][y] = 0;
        count++;
        for (let i = 0; i < 4; i++) {
          queue.push([x + dx[i], y + dy[i]]);
        }
      }
    }
  };

  const dfs = ([x, y]) => {
    if (checkBoundary(x, y) && matrix[x][y] === 1) {
      matrix[x][y] = 0;
      count++;
      for (let i = 0; i < 4; i++) {
        dfs([x + dx[i], y + dy[i]]);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 1) {
        bfs([i, j]);
        dfs([i, j]);
        homes.push(count);
        count = 0;
      }
    }
  }

  homes.sort((a, b) => a - b);
  console.log(homes.length);
  return homes;
}

let matrix = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
];
let sol = solution(7, matrix);
console.log(sol.length);
for (let el of sol) {
  console.log(el);
}
