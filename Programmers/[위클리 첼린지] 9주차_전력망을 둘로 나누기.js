// https://programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  // 이미 모두 연결되어 있는 wires의 간선들을 하나씩 끊어 나가면서,
  // 생기는 두 컴포넌트의 각 정점들의 개수 차이를 배열에 담아,
  // 개수 차이들 중에서 최솟값을 리턴한다.

  const result = [];
  let count = 0;
  let check = new Array(n).fill(false);

  // 인접행렬 만들기
  const matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
  for (let wire of wires) {
    matrix[wire[0] - 1][wire[1] - 1] = 1;
    matrix[wire[1] - 1][wire[0] - 1] = 1;
  }
  // bfs 함수
  function bfs(from) {
    let queue = [from];
    check[from] = true;
    count++;
    while (queue.length > 0) {
      let now = queue.shift();
      for (let i = 0; i < matrix[now].length; i++) {
        if (matrix[now][i] === 1 && check[i] === false) {
          check[i] = true;
          queue.push(i);
          count++;
        }
      }
    }
  }

  for (let wire of wires) {
    matrix[wire[0] - 1][wire[1] - 1] = 0;
    matrix[wire[1] - 1][wire[0] - 1] = 0;

    bfs(0);

    // matrix 원래 상태로 되돌리기
    matrix[wire[0] - 1][wire[1] - 1] = 1;
    matrix[wire[1] - 1][wire[0] - 1] = 1;
    // 전체 정점 n에서 여태까지 구한 count를 뺀 수가 다른 컴포넌트의 정점 개수이므로
    result.push(Math.abs(n - count - count));
    // count와 check 배열 원래 상태로 되돌리기
    count = 0;
    check = new Array(n).fill(false);
  }

  return Math.min(...result);
}
