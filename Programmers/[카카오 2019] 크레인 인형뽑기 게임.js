// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let result = 0;
  const stack = [];

  const obj = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!(i + 1 in obj)) {
        obj[i + 1] = [];
      }
      if (board[j][i] !== 0) obj[i + 1].push(board[j][i]);
    }
  }

  for (let el of moves) {
    if (obj[el].length === 0) continue;
    stack.push(obj[el].shift());
    if (stack[stack.length - 2] === stack[stack.length - 1]) {
      stack.pop();
      stack.pop();
      result += 2;
    }
  }

  return result;
}
