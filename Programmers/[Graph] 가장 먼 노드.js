// https://programmers.co.kr/learn/courses/30/lessons/49189#qna

function solution(n, edge) {
  // 기존 BFS 방식으로 edge를 계속 돌 경우, 시간초과 발생
  // => 범위를 줄여 시간 초과를 막아야 한다.
  // => 인접 리스트 방식으로 해결해야한다!
  const check = new Array(n + 1).fill(-1);
  check[0] = 0;
  check[1] = 0;
  const list = new Array(n + 1).fill(0).map((el) => new Array());
  for (let el of edge) {
    list[el[0]].push(el[1]);
    list[el[1]].push(el[0]);
  }
  let queue = [1];
  while (queue.length > 0) {
    let now = queue.shift();
    if (!(list[now].length === 0)) {
      for (let el of list[now]) {
        if (check[el] === -1) {
          check[el] = check[now] + 1;
          queue.push(el);
        }
      }
    }
  }

  const max = Math.max(...check);
  return check.filter((el) => el === max).length;
}
