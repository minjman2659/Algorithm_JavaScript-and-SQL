// https://www.acmicpc.net/problem/2667

function solution(N, matrix) {
  let home = 0;
  const homeCount = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // ------------------------ dfs
  const dfs = (x, y) => {
    if (x >= 0 && x < N && y >= 0 && y < N && matrix[x][y] === 1) {
      matrix[x][y] = 0;
      home++;
      for (let i = 0; i < 4; i++) {
        dfs(x + dx[i], y + dy[i]);
      }
    }
  };

  // ------------------------ bfs
  const bfs = (x, y) => {};

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] === 1) {
        dfs(i, j);
        homeCount.push(home);
        home = 0;
      }
    }
  }

  homeCount.sort((a, b) => a - b);
  return homeCount;
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
