// https://programmers.co.kr/learn/courses/30/lessons/17679

// 시간 초과 에러 발생 => 시간복잡도 = O(n^3)
// 최소한 O(n^2)이 될 수 있도록 수정해보자.
function solution(m, n, board) {
  let count = 0;
  board = board.map((el) => el.split(''));
  let tmp = [];
  let check = true;

  const tmpPush = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 1; j < arr[i].length; j++) {
        if (
          arr[i][j - 1] === arr[i][j] &&
          arr[i - 1][j - 1] === arr[i][j - 1] &&
          arr[i][j] === arr[i - 1][j]
        ) {
          tmp.push([i - 1, j - 1], [i - 1, j], [i, j - 1], [i, j]);
        }
      }
    }
    if (tmp.length === 0) check = false;
    else {
      for (let el of tmp) {
        board[el[0]][el[1]] = 0;
      }
      tmp = [];
      check = true;
    }
  };

  tmpPush(board);
  while (check) {
    for (let i = 1; i < board.length; i++) {
      let idx = board[i].indexOf(0);
      if (idx !== -1) {
        board[i][idx] = board[i - 1][idx];
        count++;
      }
    }
    tmpPush(board);
  }

  return count;
}
