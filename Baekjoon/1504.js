// https://www.acmicpc.net/problem/1504
// 다익스트라 알고리즘

// 정점 개수, 간선 개수, 정점 그래프, 반드시 거쳐야하는 정점1, 반드시 거쳐야하는 정점2
function solution(N, E, road, v1, v2) {
  const candidate1 =
    shortCutFromStart(1)[v1] +
    shortCutFromStart(v1)[v2] +
    shortCutFromStart(v2)[N];
  const candidate2 =
    shortCutFromStart(1)[v2] +
    shortCutFromStart(v2)[v1] +
    shortCutFromStart(v1)[N];

  const result = Math.min(candidate1, candidate2);
  return result === Infinity ? -1 : result;

  function shortCutFromStart(start) {
    const check = new Array(N + 1).fill(Infinity);
    check[start] = 0;
    const adj = new Array(N + 1).fill(0).map((el) => []);

    for (let el of road) {
      adj[el[0]].push([el[1], el[2]]);
    }

    const queue = [start];
    while (queue.length > 0) {
      const now = queue.shift();
      for (let arr of adj[now]) {
        let next = arr[0];
        let nextCount = arr[1];
        if (check[next] > check[now] + nextCount) {
          check[next] = check[now] + nextCount;
          queue.push(next);
        }
      }
    }
    return check;
  }
}
