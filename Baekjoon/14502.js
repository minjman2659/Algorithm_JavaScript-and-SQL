// https://www.acmicpc.net/problem/14502

function solution(N, M, matrix) {
  let result = 0;
  const matrix2 = matrix.map((el) => el.slice());
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let wallCount = 3;

  const bfs = (x, y, check) => {
    const queue = [[x, y]];
    check[x][y] = true;
    while (queue.length > 0) {
      let [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (!check[nx][ny] && matrix[nx][ny] === 0) {
          queue.push([nx, ny]);
          check[nx][ny] = true;
          matrix2[nx][ny] = 2;
        }
      }
    }
  };

  const getCount = () => {
    let check = new Array(N).fill(0).map((el) => new Array(M).fill(false));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (matrix2[i][j] === 2) {
          bfs(i, j, check);
        }
      }
    }
    let count = 0;
    const tmp = matrix2.map((arr) => arr.filter((el) => el === 0).length);
    tmp.forEach((el) => {
      count += el;
    });
    return count;
  };

  const getSolution = (x, y) => {
    if (wallCount === 0) {
      result = Math.max(result, getCount());
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

  return getSolution(0, 0);
}
