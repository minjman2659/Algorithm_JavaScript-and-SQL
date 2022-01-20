// https://www.acmicpc.net/problem/10026

function solution(N, matrix) {
  const result = [0, 0];
  const matrixOfWeak = matrix.map((arr) =>
    arr.map((el) => {
      if (el === 'G') return 'R';
      else return el;
    })
  );
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const checkBoundary = (x, y) => {
    if (x >= 0 && x < N && y >= 0 && y < N) {
      return true;
    } else {
      return false;
    }
  };

  const dfs = (x, y, color, matrix) => {
    if (checkBoundary(x, y) && matrix[x][y] === color) {
      matrix[x][y] = 1;
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        dfs(nx, ny, color, matrix);
      }
    }
  };

  const getCount = (matrix) => {
    let count = 0;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (matrix[x][y] !== 1) {
          dfs(x, y, matrix[x][y], matrix);
          count++;
        }
      }
    }
    return count;
  };

  result[0] = getCount(matrix);
  result[1] = getCount(matrixOfWeak);

  return result;
}
