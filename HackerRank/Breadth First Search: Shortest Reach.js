// https://www.hackerrank.com/challenges/bfsshortreach/problem?isFullScreen=true

function bfs(n, m, edges, s) {
  const result = new Array(n + 1).fill(-1);
  let queue = [[s, 0]];
  while (queue.length > 0) {
    let [now, count] = queue.shift();
    for (let edge of edges) {
      let tmp = edge.filter((el) => el !== now);
      if (tmp.length === 1 && result[tmp[0]] === -1) {
        queue.push([tmp[0], count + 1]);
        result[tmp[0]] = (count + 1) * 6;
      }
    }
  }
  result.splice(s, 1);
  result.shift();

  return result;
}
