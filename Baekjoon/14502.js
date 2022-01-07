// https://www.acmicpc.net/problem/14502

function solution(N, M, matrix) {
  let result = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let wallCount = 3;

  const checkBoundary = (x, y) => {
    if (x >= 0 && x < N && y >= 0 && y < M) {
      return true;
    } else {
      return false;
    }
  };

  const bfs = (x, y, check, matrix2) => {
    const queue = [[x, y]];
    check[x][y] = true;
    while (queue.length > 0) {
      let [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (checkBoundary(nx, ny)) {
          if (!check[nx][ny] && matrix[nx][ny] === 0) {
            queue.push([nx, ny]);
            check[nx][ny] = true;
            matrix2[nx][ny] = 2;
          }
        }
      }
    }
  };

  const getCount = () => {
    let matrix2 = matrix.map((el) => el.slice());
    let check = new Array(N).fill(0).map((el) => new Array(M).fill(false));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (matrix2[i][j] === 2) {
          bfs(i, j, check, matrix2);
        }
      }
    }
    let count = 0;
    const tmp = matrix2.map((arr) => arr.filter((el) => el === 0).length);
    tmp.forEach((el) => {
      count += el;
    });
    result = Math.max(result, count);
  };

  const getSolution = (x, y) => {
    if (wallCount === 0) {
      getCount();
    }
    for (let i = x; i < N; i++) {
      for (let j = y; j < M; j++) {
        if (matrix[i][j] === 0) {
          wallCount--;
          matrix[i][j] = 1;
          getSolution(x, y);
          wallCount++;
          matrix[i][j] = 0;
        }
      }
    }
  };

  getSolution(0, 0);
  return result;
}
