// https://programmers.co.kr/learn/courses/30/lessons/12978

function solution(N, road, K) {
  // 다익스트라 알고리즘 활용
  const check = new Array(N + 1).fill(Infinity);
  check[1] = 0;
  const adj = new Array(N + 1).fill(0).map((el) => new Array(0));
  for (let el of road) {
    adj[el[0]].push([el[1], el[2]]);
    adj[el[1]].push([el[0], el[2]]);
  }
  const queue = [[1, 0]];
  while (queue.length > 0) {
    let [now, count] = queue.shift();
    for (let i = 0; i < adj[now].length; i++) {
      let next = adj[now][i][0];
      let nextCount = adj[now][i][1];
      if (check[next] > check[now] + nextCount) {
        check[next] = check[now] + nextCount;
        queue.push([next, nextCount]);
      }
    }
  }
  check.shift();
  return check.filter((el) => el <= K).length;
}
