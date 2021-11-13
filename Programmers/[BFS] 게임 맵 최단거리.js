// https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
  // 두 점 사이의 최단 거리를 구해야 하기 때문에 BFS로 풀자!

  let result = -1;
  let src = [0, 0, 1]; // 순서대로 [x, y, count]

  const bfs = (arr) => {
    const queue = [arr];

    while (queue.length > 0) {
      let [x, y, count] = queue.shift();
      maps[0][0] = 0;
      let nextX = [-1, 0, 1, 0];
      let nextY = [0, 1, 0, -1];
      // 목표지에 도달할 경우
      if (x === maps.length - 1 && y === maps[0].length - 1) {
        result = count;
        return;
      }
      for (let i = 0; i < 4; i++) {
        let nx = x + nextX[i];
        let ny = y + nextY[i];
        // 다음 path가 바깥 범위일 경우
        if (nx < 0 || nx > maps.length - 1 || ny < 0 || ny > maps[0].length - 1)
          continue;
        // 통로일 경우
        if (maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          queue.push([nx, ny, count + 1]);
        }
      }
    }
  };

  bfs(src);
  return result;
}
