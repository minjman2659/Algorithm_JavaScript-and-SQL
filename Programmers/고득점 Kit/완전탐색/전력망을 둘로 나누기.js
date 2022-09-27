// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  // 이어진 wires의 간선들을 전부 하나씩 끊어가면서
  // 생기는 두 컴포넌트의 각 정점들 개수 차이중 최소값을 구한다.

  let result = 100;
  let check = new Array(n).fill(false);

  const matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
  for (const [v1, v2] of wires) {
    matrix[v1 - 1][v2 - 1] = 1;
    matrix[v2 - 1][v1 - 1] = 1;
  }

  let count = 0;
  const bfs = (from) => {
    const queue = [from];
    check[from] = true;
    count++;
    while (queue.length > 0) {
      const now = queue.shift();
      for (let i = 0; i < matrix[now].length; i++) {
        if (matrix[now][i] === 1 && !check[i]) {
          check[i] = true;
          queue.push(i);
          count++;
        }
      }
    }
  };

  for (const [v1, v2] of wires) {
    matrix[v1 - 1][v2 - 1] = 0;
    matrix[v2 - 1][v1 - 1] = 0;
    bfs(0);
    matrix[v1 - 1][v2 - 1] = 1;
    matrix[v2 - 1][v1 - 1] = 1;
    result = Math.min(result, Math.abs(n - count - count));
    count = 0;
    check = new Array(n).fill(false);
  }

  return result;
}
