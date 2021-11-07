// https://programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  let result = 0;
  board = board.map((el) => el.split(''));
  // while의 조건식으로 true를 넣어 무한루프를 진행한다.
  while (true) {
    let tmp = [];
    // 4개의 요소들이 같은지를 판별한 후, 같다면 tmp 배열에 [i, j]를 넣어준다.
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 1][j]
        ) {
          tmp.push([i, j]);
        }
      }
    }
    // tmp가 빈배열일 경우, 더이상 같은 요소가 없다는 뜻이므로 0의 개수를 모두 카운트하여 리턴한다.
    if (tmp.length === 0) {
      for (let arr of board) {
        result += arr.filter((el) => el === 0).length;
      }
      return result;
    }
    // tmp 요소에 해당되는 인덱스들을 board에서 모두 0으로 바꿔준다.
    for (let el of tmp) {
      board[el[0]][el[1]] = 0;
      board[el[0]][el[1] - 1] = 0;
      board[el[0] - 1][el[1] - 1] = 0;
      board[el[0] - 1][el[1]] = 0;
    }
    // 재정렬
    for (let i = m - 1; i > 0; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          let k = i - 1;
          while (k > 0 && board[k][j] === 0) {
            k--;
          }
          board[i][j] = board[k][j];
          board[k][j] = 0;
        }
      }
    }
  }
}
