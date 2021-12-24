// https://programmers.co.kr/learn/courses/30/lessons/67259#qna

function solution(board) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0]; // 상하좌우
  const len = board.length;
  const check = new Array(len).fill(0).map((el) => new Array(len).fill(0));

  const queue = [[0, 0, 0, 0]]; // x, y, cost, dir
  while (queue.length > 0) {
    const [x, y, cost, dir] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= len || ny < 0 || ny >= len || board[nx][ny] === 1)
        continue;
      const direction = i < 2 ? 0 : 1; // 상하 === 0, 좌우 === 1
      let newCost;
      if (x === 0 && y === 0) newCost = cost + 100;
      else newCost = dir === direction ? cost + 100 : cost + 600;
      if (check[nx][ny] === 0 || check[nx][ny] >= newCost) {
        check[nx][ny] = newCost;
        queue.push([nx, ny, newCost, direction]);
      }
    }
  }

  return check[len - 1][len - 1];
}
