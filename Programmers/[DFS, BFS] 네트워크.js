// https://programmers.co.kr/learn/courses/30/lessons/43162

// 'URclass_자료구조_[BFS/DFS]연결된 정점들' 문제와 비슷

function solution(n, computers) {
  let count = 0;
  const check = new Array(n).fill(false);

  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      check[i] = true;
      bfs(computers[i]);
      // dfs(computers[i]);
      count++;
    }
  }

  return count;

  // bfs
  function bfs(node) {
    let queue = [node];
    while (queue.length > 0) {
      let now = queue.shift();
      for (let i = 0; i < now.length; i++) {
        if (!check[i] && now[i] === 1) {
          check[i] = true;
          queue.push(computers[i]);
        }
      }
    }
  }

  // dfs
  function dfs(node) {
    for (let i = 0; i < node.length; i++) {
      if (!check[i] && node[i] === 1) {
        check[i] = true;
        dfs(computers[i]);
      }
    }
  }
}
