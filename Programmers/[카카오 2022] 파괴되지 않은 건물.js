// https://programmers.co.kr/learn/courses/30/lessons/92344

function solution(board, skill) {
  // 누적합 문제
  // 누적합을 위한 sumMatrix를 정의한 후 우향 => 하향 으로 값을 누적해서 더해간다.
  // 이후 board와 sumMatrix를 더한 후 값을 출력
  const R = board.length;
  const C = board[0].length;
  const sumMatrix = new Array(R + 1)
    .fill(0)
    .map((el) => new Array(C + 1).fill(0));

  for (let val of skill) {
    const [type, r1, c1, r2, c2, degree] = val;
    if (type === 1) {
      sumMatrix[r1][c1] -= degree;
      sumMatrix[r1][c2 + 1] += degree;
      sumMatrix[r2 + 1][c1] += degree;
      sumMatrix[r2 + 1][c2 + 1] -= degree;
    } else {
      sumMatrix[r1][c1] += degree;
      sumMatrix[r1][c2 + 1] -= degree;
      sumMatrix[r2 + 1][c1] -= degree;
      sumMatrix[r2 + 1][c2 + 1] += degree;
    }
  }

  for (let r = 0; r < R + 1; r++) {
    // 오른쪽으로 누적합 구하기
    for (let c = 1; c < C + 1; c++) {
      sumMatrix[r][c] += sumMatrix[r][c - 1];
    }
  }

  for (let c = 0; c < C + 1; c++) {
    // 아래쪽으로 누적합 구하기
    for (let r = 1; r < R + 1; r++) {
      sumMatrix[r][c] += sumMatrix[r - 1][c];
    }
  }

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      board[r][c] += sumMatrix[r][c];
    }
  }

  return board.reduce((acc, cur) => acc + cur.filter((el) => el > 0).length, 0);
}
