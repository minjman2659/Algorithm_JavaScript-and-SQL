// https://www.acmicpc.net/problem/2468

function solution(N, matrix) {
  let result = 0;
  let max = Math.max(...matrix.map((arr) => Math.max(...arr)));
  const matrixSaved = JSON.parse(JSON.stringify(matrix));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const checkBoundary = (x, y) => {
    if (x >= 0 && x < N && y >= 0 && y < N) {
      return true;
    } else {
      return false;
    }
  };

  const dfs = (x, y, num) => {
    if (checkBoundary(x, y) && matrix[x][y] > num) {
      matrix[x][y] = num;
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        dfs(nx, ny, num);
      }
    }
  };

  const getCount = (num) => {
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (matrix[i][j] > num) {
          dfs(i, j, num);
          count++;
        }
      }
    }
    return count;
  };

  for (let i = 1; i < max; i++) {
    result = Math.max(result, getCount(i));
    matrix = JSON.parse(JSON.stringify(matrixSaved));
  }

  return result;
}
