// https://www.acmicpc.net/problem/1753
// 다익스트라 알고리즘

// 정점의 개수, 간선의 개수, 시작점, 정점 그래프
function solution(V, E, K, road) {
  // 정점 1부터 편하게 작업하기 위해 0인덱스를 추가
  // K(시작점)에서부터 각 정점(check 배열의 각 인덱스)까지의 거리는 우선 가장 큰 수인 Infinity를 할당해 놓는다.
  const check = new Array(V + 1).fill(Infinity);
  check[K] = 0;
  const adj = new Array(V + 1).fill(0).map((el) => []);

  for (let el of road) {
    adj[el[0]].push([el[1], el[2]]);
  }

  const queue = [K];
  while (queue.length > 0) {
    const now = queue.shift();
    for (let arr of adj[now]) {
      let next = arr[0];
      let nextCount = arr[1];
      if (check[next] > check[now] + nextCount) {
        // 만약 K(시작점)부터 next까지의 거리보다
        // K부터 now까지의 누적된 거리 + nextCount 가 더 작다면(최단거리라면)
        // 해당 최단거리로 재할당
        check[next] = check[now] + nextCount;
        queue.push(next);
      }
    }
  }
  check.shift();
  return check;
}
