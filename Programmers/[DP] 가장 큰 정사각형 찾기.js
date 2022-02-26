// https://programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let result = 0;
  const N = board.length;
  const M = board[0].length;

  if (N === 1) {
    return board[0].includes(1) ? 1 : 0;
  }

  for (let x = 1; x < N; x++) {
    for (let y = 1; y < M; y++) {
      if (board[x][y] > 0) {
        const min = Math.min(
          board[x - 1][y],
          board[x - 1][y - 1],
          board[x][y - 1]
        );
        board[x][y] = min + 1;
        result = Math.max(result, board[x][y]);
      }
    }
  }

  return Math.pow(result, 2);
}
