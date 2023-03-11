// https://school.programmers.co.kr/learn/courses/30/lessons/154540#qna

function solution(maps) {
  const result = [];
  const xLength = maps.length;
  const yLength = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const isVisited = new Array(xLength)
    .fill(0)
    .map((el) => new Array(yLength).fill(false));

  const isTrue = (x, y) => {
    if (
      x >= 0 &&
      x < xLength &&
      y >= 0 &&
      y < yLength &&
      !isVisited[x][y] &&
      maps[x][y] !== "X"
    ) {
      return true;
    }
    return false;
  };

  const bfs = (x, y) => {
    const queue = [[x, y]];
    let value = 0;
    while (queue.length > 0) {
      const [nowX, nowY] = queue.shift();
      value += Number(maps[nowX][nowY]);
      for (let i = 0; i < 4; i++) {
        const nx = nowX + dx[i];
        const ny = nowY + dy[i];
        if (isTrue(nx, ny)) {
          isVisited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    result.push(value);
  };

  for (let x = 0; x < xLength; x++) {
    for (let y = 0; y < yLength; y++) {
      if (!isVisited[x][y] && maps[x][y] !== "X") {
        isVisited[x][y] = true;
        bfs(x, y);
      }
    }
  }

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}
