// https://school.programmers.co.kr/learn/courses/30/lessons/147354#qna

function solution(data, col, row_begin, row_end) {
  const copied = data.slice().sort((a, b) => {
    if (a[col - 1] !== b[col - 1]) {
      return a[col - 1] - b[col - 1];
    } else {
      return b[0] - a[0];
    }
  });

  let result = 0;
  for (let i = row_begin; i <= row_end; i++) {
    result ^= copied[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
  }

  return result;
}
