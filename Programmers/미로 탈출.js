// https://school.programmers.co.kr/learn/courses/30/lessons/159993#qna

function solution(maps) {
  let start = null;
  let lever = null;
  maps.forEach((el, index) => {
    const indexS = el.indexOf("S");
    const indexL = el.indexOf("L");
    if (indexS !== -1) start = [index, indexS];
    if (indexL !== -1) lever = [index, indexL];
  });

  const countForLever = bfs(maps, [...start], "L");
  const countForExit = bfs(maps, [...lever], "E");

  if (countForLever === -1 || countForExit === -1) {
    return -1;
  }

  return countForLever + countForExit;
}

function bfs(matrix, start, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // 방문 여부를 저장하는 2차원 배열
  const visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [start];
  visited[start[0]][start[1]] = true;
  let count = 0;

  while (queue.length > 0) {
    const curLevelSize = queue.length;
    for (let i = 0; i < curLevelSize; i++) {
      const [x, y] = queue.shift();
      if (matrix[x][y] === target) {
        return count;
      }

      // 상하좌우 이동
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        // 인접한 점이 배열 내부에 있는지 확인
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          matrix[nx][ny] !== "X"
        ) {
          // 아직 방문하지 않은 점이면 큐에 삽입
          if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }
    count++;
  }

  return -1;
}
